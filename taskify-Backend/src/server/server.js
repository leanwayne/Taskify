const express = require('express')
const config = require('../config/envConfig')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const app = express()
const session = require('express-session')
const http = require('http').createServer(app)
const PORT = process.env.PORT || 8080
const cors = require('cors')
const path = require('path')
const passport = require('passport')
require('../passport/passport')

const usersRouter = require('./routes/usersRouter');
const tasksRouter = require('./routes/tasksRouter');

//middlewares--
app.use(express.urlencoded({extended: true}))
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(cookieParser('mi ultra secreto'))
app.use(compression())
app.use(express.json())
app.use(
    session({
        secret: 'mi ultra secreto',
        resave: true,
        saveUninitialized: false,
        rolling: true,
        cookie: { maxAge : 60000000 }
    })
)
app.use(passport.initialize())
app.use(passport.session())
//--
//Data base heroku postgreSql--
const { pgDb } = require('../config/pgSqlConfig');
const models = require('./models/sequelizeSchema')
//--

//Routers--
app.use('/users', usersRouter);
app.use('/task', tasksRouter);
//--

app.get('/', (req, res) => res.send('Hello World!'))

http.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
});