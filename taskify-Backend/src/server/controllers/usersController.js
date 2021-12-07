const DAO = require('../models/usersDAO');
const logger = require('../../utils/log4js');

module.exports = {
    register: async (req, res) => {  
        if(req.session){
            logger.logInfo.info(req.session);
           return res.status(200).json(req.session);
        }else{
            return res.starus(400).json({error:'user not logged'});
        };
    },

    SignIn: async (req, res) => {
        try {
            if(req.session){
                logger.logInfo.info(req.session);
               return res.status(200).json(req.session);
            }else{
                return res.starus(400).json({error:'user not logged'});
            };   
        } catch (error) {
            logger.logError.error(error);
        };
    },

    showLog: async (req, res) => {
        try {
            if(req.session.passport){
                logger.logInfo.info(req.session.passport);             
                return res.status(200).json(req.session.passport);        
            } else {
                return res.status(400).send('session not found');
            };
        } catch (error) {
            logger.logError.error(error);
        };
    },

    getUsers: async (req, res) => {
        try {
            const users = await DAO.getUsers();
             if(users === null){
                logger.logWarn.warn("not found!");
             } else {
                logger.logInfo.info(users);
                return res.status(200).json(users);
             };    
        } catch (error) {
            logger.logError.error("error",error); 
        };
    },
};