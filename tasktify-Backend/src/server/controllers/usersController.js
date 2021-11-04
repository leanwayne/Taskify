const model = require('../models/sequelizeSchema');

module.exports = {
    register: async (req, res) => {  
        if(req.session){
            console.log(req.session);
           return res.status(200).json(req.session);
        }else{
            return res.starus(400).json({error:'user not logged'});
        };
    },

    SignIn: async (req, res) => {
        try {
            if(req.session){
                console.log(req.session);
               return res.status(200).json(req.session);
            }else{
                return res.starus(400).json({error:'user not logged'});
            };   
        } catch (error) {
           console.log(error);
        };
    },

    showLog: async (req, res) => {
        try {
            if(req.session.passport){
                console.log(req.session.passport);              
                return res.status(200).json(req.session.passport);        
            } else {
                return res.status(400).send('session not found');
            };
        } catch (error) {
           console.log(error); 
        };
    },

    getUsers: async (req, res) => {
        try {
            const users = await model.User.findAll();
             if( users === null){
                 console.log("not found!!!");
             } else {
                 console.log(users);
                return res.status(200).json(users);
             };
            
        } catch (error) {
            console.log("el error", error);  
        };
    },
};