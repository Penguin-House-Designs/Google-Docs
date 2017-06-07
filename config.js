module.exports = {
  secret: 'supersecretsecret',// Your secret here
  connectstring: "postgres://nvcarkwn:81B8nbml2xaONxQLgULO8ozP9uM3vh6r@stampy.db.elephantsql.com:5432/nvcarkwn",
  // connectstring: "postgres://postgres@localhost/dominic_mac" ,
  auth0: {
    domain: 'domd0101.auth0.com',// App Auth0 domain,
    clientID: 'elsd3HUdQZb70HbyVd_poDUtevdaElQA',// Client ID,
    clientSecret: 'q8dP4TQ0O_CQ-Yj71ERjOXkAx5vNthdwOthCY58UMJyXGJQCUFXpysKVSN1ET3pu', //Client Secret,
    callbackURL: 'http://localhost:3000/auth/callback'
  }
};
