
// !CONFIGURATION ==============
// =============================

module.exports = {
    'port':      process.env.PORT || 8080 // set the port for our app
  , 'database': 'mongodb://localhost:27017/db_node-express'
  , 'secret':   'supersecret' // token secret
  , 'devmode':  true
};
