const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,"Please add the project name"],
    },
    description: {
        type: String,
        required: [true,"Please add project description"],
    },
},{
    timestamps: true, 
 }
)

module.exports = mongoose.model('Project', projectSchema)