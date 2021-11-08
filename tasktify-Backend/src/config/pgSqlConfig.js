const config = require('./envConfig')
const { Sequelize } = require('sequelize');
const logger = require('../utils/log4js');

const pgDb = new Sequelize(config.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

pgDb.authenticate().then(() => {
    logger.logInfo.info('Connection has been established successfully.');
}).catch(err => {
    logger.logError.error('Unable to connect to the database:', err);
});

module.exports= { pgDb };