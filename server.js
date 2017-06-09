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


app.post('/api/saves_slide', (req, res) => {
	var data = [req.body.user_id, req.body.slide_title, req.body.g_info, req.body.slide_content, req.body.slide_date];
  db.save_slide(data, (err, slide) => {
		console.log(err);
    err ? res.status(500) : res.send(slide);
  })
})

app.put('/api/saves_slide', (req, res) => {
	var data = [req.body.user_id, req.body.slide_title, req.body.g_info, req.body.slide_content, req.body.slide_date, req.body.slide_id];
  db.resave_slide(data, (err, slide) => {
		console.log(err);
    err ? res.status(500) : res.send(slide);
  })
})

app.post('/api/loadUserSlides', (req, res)=>{
	db.load_user_slides([req.body.user_id],(err, slides)=>{
		err ? res.status(500) : res.send(slides)
	})
})

app.post('/api/loadSlide', (req, res)=>{
	db.load_slide([req.body.s_id],(err, slides)=>{
		err ? res.status(500) : res.send(slides)
	})
})


// AUTH0 STUFF//
/////////////////////////
passport.use(new Auth0Strategy({
   domain:       config.auth0.domain,
   clientID:     config.auth0.clientID,
   clientSecret: config.auth0.clientSecret,
   callbackURL:  config.auth0.callbackURL
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    //Find user in database
    db.getUserByAuthId([profile.id], function(err, user) {
      user = user[0];
      if (!user) { //if there isn't one, we'll create one!
        console.log('CREATING USER');
        if (profile.name.familyName && profile.name.givenName) {
          var data =
          [
            profile.displayName,
            profile.id,
            profile.nickname,
            profile.username,
            profile.name.givenName,
            profile.picture
          ]
        }
        else {
          var data =
          [
            profile.displayName,
            profile.id,
            profile._json.user_metadata.nickname,
            profile._json.user_metadata.email,
            profile._json.user_metadata.name,
            'http://clipground.com/images/penguin-face-clipart-12.jpg'
          ]
        }
        db.createUserByAuth(data, function(err, user) {
          if(err){
          }
          return done(err, user[0]);
        })
      } else {
        return done(err, user);
      }
    })
  }
));

passport.serializeUser(function(userA, done) {
  done(null, userA);
});
passport.deserializeUser(function(userB, done) {
  done(null, userB);
});

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback',
  passport.authenticate('auth0', {successRedirect: '/'}), function(req, res) {
    res.status(200).send(req.user);
})

app.get('/auth/me', function(req, res) {
  if (!req.user) return res.sendStatus(404);
  return res.status(200).send(req.user);
})

app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

app.post('/saveSheet', function(req, res) {
  let data = [
    req.body.userid,
    req.body.val
  ];
  console.log(data[0]);
  db.postpost(data, (err, sqlResponse) => {
    if (!err) {
      console.log(sqlResponse);
      res.status(200).send(sqlResponse);
              }
    else {
      console.log(err);
      res.send(err);
         }
  })
})

app.post('/getSheets',function(req, res){
  console.log(req.body.id);
    db.getSheets(req.body.id, function(err,pens){
      if (!err) {
        res.status(200).send(pens);
      } else {
        res.send(err);
      }
    })
  })







app.listen(3000, ()=>{
  console.log("Successfully listening on : 3000")
})
