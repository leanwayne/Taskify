const model = require('./sequelizeSchema');

module.exports = {
    getTasks: async (user_id) => await model.Task.findAll({
        where: { user_id }
    }),

    getTask: async (id, user_id) => await model.Task.findOne({
        where: { 
            id,
            user_id
        }
    }),

    createTask: async (title, description, user_id) => await model.Task.create(
        {
            title,
            description,
            completed: false,
            user_id,
        }
    ),

    updateTasks: async (id, user_id, newTask) => await model.Task.update(
        newTask,
        {
            where: { 
                id,
                user_id,
            }
        }
    ),

    deleteTasks: async (id, user_id) => await model.Task.destroy({
        where: { 
            id,
            user_id
        } 
    })
}