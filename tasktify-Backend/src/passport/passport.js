const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const model = require('../server/models/sequelizeSchema');
const bcrypt = require('bcrypt');
const DAO = require('../server/models/usersDAO');
const logger = require('../utils/log4js');

passport.use('login', new LocalStrategy({passReqToCallback: true}, async function(req, username, password, done) {
    let user = undefined;
    try{ //busco user
        user = await DAO.getUser(username);
    }catch (error) {
        logger.logError.error(error);     
    };
    if(!user) {
        logger.logInfo.info('wrong user');
        return done(null, false);
    };     
    const match = await bcrypt.compare(password, user.password);
    if(match) {
        logger.logInfo.info('login successfull');
        return done(null, user);
    }else{
        logger.logInfo.info('wrong password');
        return done(null, false);
    };
}));

passport.use('register',new LocalStrategy({passReqToCallback: true}, async function(req, username, password, done) {
    findOrCreateUser = async function() {
        try {//busco user
            let response = await DAO.getUserByEmail(req.body.email)
            if(response === null) response = {dataValues:{email:""}};
            if(response.dataValues.email === req.body.email) {
                logger.logInfo.info('user already exist', response.dataValues.username);
                return done(null, false);
            };
        }catch(error) {
            logger.logError.error(error);
        };
        //si no existe lo creo
        try {
            const reg = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(req.body.email);
            if(reg){
                bcrypt.hash(password, 10).then( async function(hash) {
                    const user = await DAO.createUser(username, hash, req.body.email)

                    logger.logInfo.info('register completed');
                    return done(null, user);
                });
            };  
        } catch(error) {
            logger.logError.error(error);
            return done(null, false);
        };
    };
    process.nextTick(findOrCreateUser);
}));

passport.serializeUser(function(user, done) {
    done(null,user);
});

passport.deserializeUser(function(username, done) {
    try {
        const user = model.User.findOne({
            where: { username : username }
        });
        done(null, user)
    }catch (error) {
        logger.logError.error(error);
    };
});