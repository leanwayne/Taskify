const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');
const {verify} = require('../middlewares/userVerification')

router.get('/getTasks', verify, tasksController.getUserTasksById);
router.post('/createTask', verify, tasksController.createTask);
router.put('/updateTaskById', verify, tasksController.updateUserTaskById);
router.delete('/deleteTaskById', verify, tasksController.deleteUserTaskById);

module.exports = router;