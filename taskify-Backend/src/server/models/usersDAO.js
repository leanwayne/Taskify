const model = require('./sequelizeSchema')

module.exports = {

    getUsers: async () => await model.User.findAll(),

    getUser: async ( username ) => {
        const user = await model.User.findOne({
            where: { username }
        });
        return user;
    },

    getUserByEmail: async ( email ) => {
        const user = await model.User.findOne({
            where: { email }
        });
        return user;
    },

    createUser: async (username, hash, email) => {
        const user = await model.User.create(
            {
                username,
                password: hash,
                email,
            }
        );
        return user;
    },
}