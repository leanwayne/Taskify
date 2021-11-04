const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const model = require('../server/models/sequelizeSchema');
const bcrypt = require('bcrypt');

passport.use('login', new LocalStrategy({passReqToCallback: true}, async function(req, username, password, done) {
    let user = undefined;
    try{ //busco user
        user = await model.User.findOne({
            where: { username }
        });
    }catch (error) {
        console.log(error);      
    };
    if(!user) {
        console.log('wrong user');
        return done(null, false);
    };     
    const match = await bcrypt.compare(password, user.password);
    if(match) {
        console.log('login successfull');
        return done(null, user);
    }else{
        console.log('wrong password');
        return done(null, false);
    };
}));

passport.use('register',new LocalStrategy({passReqToCallback: true}, async function(req, username, password, done) {
    findOrCreateUser = async function() {
        try {//busco user
            let response = await model.User.findOne({
                where: { email : req.body.email }
            });
            console.log("LA RESPONSE", response);
            if(response === null) response = {dataValues:{email:""}};
            if(response.dataValues.email === req.body.email) {//----------------
                console.log('user already exist', response.dataValues.username);
                return done(null, false);
            };
        }catch(error) {
            console.log(error);
        };
        //si no existe lo creo
        try {
            const reg = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(req.body.email);
            if(reg){
                bcrypt.hash(password, 10).then( async function(hash) {
                    const user = await model.User.create(
                        {
                            username,
                            password: hash,
                            email: req.body.email,
                        }
                    );
                    console.log('nuevo registro completado', user);
                    return done(null, user);
                });
            };  
        } catch(error) {
            console.log('no se pudo agregar el user', error);
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
        console.log('DESERIALIZEUSER___', error);
    };
});