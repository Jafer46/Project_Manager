const express = require('express');
const router = express.Router();
const {getTasks, 
    createTask,  
    updateTask, 
    deleteTask} = require('../controllers/tasksController') 

router.route('/').post(createTask)
router.route('/:id').get(getTasks).put(updateTask).delete(deleteTask)

module.exports = router;