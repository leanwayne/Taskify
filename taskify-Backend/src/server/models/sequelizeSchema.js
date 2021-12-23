const Sequelize = require('sequelize');
const { pgDb } = require('../../config/pgSqlConfig');

const User = pgDb.define('User', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
    },
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,     
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {});

const Task = pgDb.define('tasks', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
    },
    title:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false, 
    },
    description:{
        type: Sequelize.DataTypes.STRING(1234),
    },
    completed:{
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
    },
    user_id:{
        type: Sequelize.DataTypes.INTEGER,
        references:{
            model:User,
            key:'id',
        },
    },
}, {});

const Session = pgDb.define('Session', {
    sid: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    expires: Sequelize.DATE,
    data: Sequelize.STRING(50000),
});



  
(async() => {
    User.sync();
    Task.sync();
    Session.sync();
})();

module.exports = { 
    User, 
    Task,
    Session,
}