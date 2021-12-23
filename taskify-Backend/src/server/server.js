const express = require('express')
const config = require('../config/envConfig')
const compression = require('compression')
const app = express()
const session = require('express-session')
const http = require('http').createServer(app)
const path = require('path')
const passport = require('passport')
const { pgDb } = require('../../src/config/pgSqlConfig');
require('../passport/passport')

const usersRouter = require('./routes/usersRouter');
const tasksRouter = require('./routes/tasksRouter');


app.use(express.urlencoded({extended: true}))
app.use(compression())
app.use(express.json())

if(process.env.NODE_ENV === 'development'){
    const cors = require('cors')
    app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
    app.use(
        session({
            secret: 'mi ultra secreto',
            resave: true,
            saveUninitialized: false,
            rolling: true,
            cookie: {  maxAge: 30 * 24 * 60 * 60 * 1000 }
        })
    )
    app.use(passport.initialize())
    app.use(passport.session())
}

if(process.env.NODE_ENV === 'production'){
    const SequelizeStore = require('connect-session-sequelize')(session.Store);
    function extendDefaultFields(defaults) {
        return {
            data: defaults.data,
            expires: defaults.expires,
        };
    }
    app.use(
        session({
            secret: 'mi ultra secreto',
            resave: false,
            //proxy: true,
            saveUninitialized: false,
            cookie: {
                maxAge: 30 * 24 * 60 * 60 * 1000, // 1 month
            },
            store: new SequelizeStore({
                db: pgDb,
                table: 'Session',
                extendDefaultFields: extendDefaultFields,
            })
        })
    );
    app.use(passport.initialize());
    app.use(passport.session());
};

app.use(express.static(path.join(__dirname, 'build')));

//Routers--
app.use('/users', usersRouter);
app.use('/task', tasksRouter);
//--

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/', (req, res) => res.send('Hello World!'))

http.listen(config.PORT, () => {
    console.log(`Server on port ${config.PORT}`)
});