const express = require('express');
const massive = require('massive');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const config = require('./config.js');


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
  connectionString : config.connectstring
});

app.set('db', conn);
const db = app.get('db');

// db.user_create_seed(()=> console.log('user table created'))

app.get('/api/users', (req, res) =>{
  db.get_all_users( (err, books) =>{
    err ? res.status(500) : res.send(books)
  })
})


app.listen('3000', ()=>{
  console.log("Successfully listening on : 3000")
})
