const exress = require('express')
const asyncHandler = require('express-async-handler')
const Task = require('../models/task')

//Get all tasks
//access type private
const getTasks = asyncHandler(async (req,res) =>{
    const tasks = await Task.find({project_id:req.params.id})
    res.status(200).json(tasks)
})

const createTask = asyncHandler(async (req,res) => {
    const {name, description, project_id} = req.body
    if(!name || !description || !project_id){
        res.status(401)
        throw new Error('Required filed is empty')
    }
    const task = await Task.create({
        name,
        description,
        project_id
    }) 
    res.status(200).json(task)   
})
const updateTask = asyncHandler(async (req,res)=>{
    const task = await Task.findById(req.params.id)
    if(!task){
        res.status(404)
        throw new Error("taskNot Found!")
    }
    const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedTask)
})

//@desc delete contact
//@route delete /api/contacts/:id
//@access public
const deleteTask = asyncHandler(async (req,res)=>{
    const task = await Task.findById(req.params.id)    
    if(!task){
        res.status(404)
        throw new Error("task Not Found!")
    }
    //there is an error here
    const deletedTask = await Task.findOneAndDelete({_id:req.params.id})
    res.status(200).json(deletedTask)
})


module.exports = {
    getTasks, 
    createTask,  
    updateTask, 
    deleteTask
}