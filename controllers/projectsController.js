const asyncHandler = require('express-async-handler')
const Project = require('../models/project')

//gets all projects
//route GET /api/projects/
const getProjects = asyncHandler(async (req,res) => {
    const projects = await Project.find()
    res.status(200).json(projects)
} )

//create a new projects
//route post /api/projects/
const createProject = asyncHandler(async (req,res) => {
    const {name , description} = req.body
    if(!name || !description){
        res.status(401)
        throw new Error("required fields not filled!")
    }
    const project = await Project.create({
        name,
        description,
    })
    res.status(200).json(project)
} )

//gets one projects
//route GET /api/projects/:id
const getProject = asyncHandler(async (req,res) => {
    const project = await Project.findById(req.params.id)
    if(!project){
        res.status(404)
        throw new Error("project not found")
    }
    res.status(200).json(project)
} )

//update a projects
//route PUT /api/projects/:id
const updateProject = asyncHandler(async (req,res) => {
    const project = await Project.findById(req.params.id)
    if(!project){
        res.status(404)
        throw new Error("project not found")
    }
    const updatedProject = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedProject)

} )

//deletes a projects
//route DELETE /api/projects/:id
const deleteProject = asyncHandler(async (req,res)=>{
    const Task = require('../models/task')
    const project = await Project.findById(req.params.id)
    
    if(!project){
        res.status(404)
        throw new Error("Contact Not Found!")
    }
    //there is an error here
    const deletedProject = await Project.findOneAndDelete({_id:req.params.id})
    const deleterCount = await Task.deleteMany({project:deletedProject._id})
    res.status(200).json(deletedProject)
})


module.exports = {getProjects, 
    createProject, 
    getProject, 
    updateProject, 
    deleteProject}

