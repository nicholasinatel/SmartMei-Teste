const {ENVIRONMENT, MONGO_URI, PORT} = require('./config');

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const log = require('debug')('api:mainApp');
const logError = log.extend('error');

log({ENVIRONMENT});
log({MONGO_URI});
log({PORT});

// mongoose.set('useFindAndModify', false);
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useCreateIndex', true);

// mongoose.connect(MONGO_URI, function (err, res) {

//   if (err) {
//     return logError('Error connecting to: %s | Error: %O', MONGO_URI, err);
//   }
//   log('Connected successfully to %s', MONGO_URI);
// });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use(cors());

app.use(express.static(__dirname + '/public'));

app.use('/user', require('./routes/user.js')) 

app.listen(PORT)
log("Oauth Server listening on PORT ", PORT)

/* ************************************************************ */

module.exports = {
  app: app
};