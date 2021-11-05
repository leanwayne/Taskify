const DAO = require('../models/tasksDAO');

module.exports = {

    getUserTasksById: async (req, res) => {
        try {
            const tasks = await DAO.getTasks(req.session.passport.user.id);
            return res.status(200).json(tasks);           
        } catch (error) {
            console.log("error getUserTasksById", error); 
            return res.status(400).send("can't get the tasks"); 
        };
    },

    createTask: async (req, res) => {
        try {
            const task = await DAO.createTask(
                req.body.title, 
                req.body.description, 
                req.session.passport.user.id
            );
            return res.status(200).json(task);            
        } catch (error) {
            console.log("error createTask", error)
            return res.status(400).send("can't create the task");
        };
    },
    
    updateUserTaskById: async (req, res) => {
        try {
            const oldTask = await DAO.getTask(
                req.query.id, 
                req.session.passport.user.id
            );          
            let newTask = {
                title: req.body.title || oldTask.dataValues.title,
                description: req.body.description || oldTask.dataValues.description,
                completed: req.body.completed || oldTask.dataValues.completed
            };    
            const updatedTask = await DAO.updateTasks(
                req.query.id,
                req.session.passport.user.id,
                newTask,
            );
            console.log("updated--------",updatedTask);
            return res.status(200).json(updatedTask); 
        } catch (error) {
            console.log("error updateUserTaskById", error);
            return res.status(400).send("can't update the task");
        };
    },
    
    deleteUserTaskById: async (req, res) => {
        try {
            const deleteTask = await DAO.deleteTasks(req.query.id, req.session.passport.user.id);
            console.log("task deleted----",deleteTask)
            return res.status(200).send("task deleted");
        } catch (error) {
            console.log("error deleteUserTaskById", error);
            return res.status(400).send("can't delete the task");
        };
    },
}