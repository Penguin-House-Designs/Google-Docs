module.exports = {
  secret: 'supersecretsecret',// Your secret here
  connectstring: "postgres://nvcarkwn:81B8nbml2xaONxQLgULO8ozP9uM3vh6r@stampy.db.elephantsql.com:5432/nvcarkwn",
  // connectstring: "postgres://postgres@localhost/dominic_mac" ,
  auth0: {
    domain: 'penguindocs.auth0.com',// App Auth0 domain,
    clientID: '23WcyrcUlDrawkH2a34rBqbWbomooCu6',// Client ID,
    clientSecret: 'Eu41yurE206Q68gQ6Dg3r7NtNj7oeCZOJUr8jFpiDxIZ7HU090rnFYB-lB8GFwiH', //Client Secret,
    callbackURL: 'http://localhost:3000/auth/callback'
  }
};
