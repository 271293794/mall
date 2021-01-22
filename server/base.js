var app = require('express')();
var bodyparser = require('body-parser')

// var session = require('express-session')

var apiAdminRouter = require('../api/admin'), apiAppRouter = require('../api/app');
var { extendAPIOutput, errHandler, loginCheck, cors, apiResourceCheck } = require('./middleware');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }))

app.use(extendAPIOutput())
app.all('*', cors())

app.use(loginCheck())
app.use(apiResourceCheck())
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.send('<p style="color:red;">你好</p>')
})
app.use('/public', require('express').static('public'));
apiAdminRouter(app)
apiAppRouter(app)
app.use(errHandler())

module.exports = app

