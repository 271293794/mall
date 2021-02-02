var app = require('express')();
var bodyparser = require('body-parser')

// var session = require('express-session')

var apiAdminRouter = require('../api/admin'), apiAppRouter = require('../api/app');
var { extendAPIOutput, errHandler, loginCheck, cors, apiResourceCheck } = require('./middleware');
require('../backend/app/util').initRabbit();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }))

app.use(extendAPIOutput())
app.all('*', cors())

app.use(loginCheck())
app.use(apiResourceCheck())
app.use('/public', require('express').static('public'));
apiAdminRouter(app)
apiAppRouter(app)
app.use(errHandler())

module.exports = app

