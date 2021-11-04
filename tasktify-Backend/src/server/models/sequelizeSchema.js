const { DataTypes } = require('sequelize');
const { pgDb } = require('../../config/pgSqlConfig');

const User = pgDb.define('User', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,     
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {});

const Task = pgDb.define('tasks', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false, 
    },
    description:{
        type: DataTypes.STRING(1234),
    },
    completed:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    user_id:{
        type: DataTypes.INTEGER,
        references:{
            model:User,
            key:'id',
        },
    },
}, {});
  
(async() => {
    User.sync();
    Task.sync();
})();

module.exports = { User, Task }