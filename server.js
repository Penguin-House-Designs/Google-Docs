const express = require('express');
const massive = require('massive');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
// const config = require('./config.js');

const app = module.exports = express();
app.use(bodyParser.json());
app.use(session({
  resave: true, //Without this you get a constant warning about default values
  saveUninitialized: true, //Without this you get a constant warning about default values
  secret: 'supersecretsecret'
}))
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(__dirname + '/public'));

app.use(cors());

const conn = massive.connectSync({
  connectionString : "postgres://nvcarkwn:81B8nbml2xaONxQLgULO8ozP9uM3vh6r@stampy.db.elephantsql.com:5432/nvcarkwn"
});

app.set('db', conn);
const db = app.get('db');

// db.user_create_seed(()=> console.log('user table created'))

app.post('/api/saves_slide', (req, res) => {
	// console.log('fuuucckkk',req.body);
	var data = [req.body.user_id, req.body.g_info, req.body.slide_content];
  db.save_slide(data, (err, slide) => {
		console.log(err);
    err ? res.status(500) : res.send(slide);
  })
})

app.get('/api/load_by_id', (req, res)=>{
	console.log('at srvr');
	db.load_slide_by_user_id((err, slides)=>{
		console.log(slides);
		err ? res.status(500) : res.send(slides)
	})
})


app.listen(3000, () =>{
  console.log("Successfully listening on : 3000")
})
