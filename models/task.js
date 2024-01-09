const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true, 'enter task name']
    },
    description: {
        type: String,
        required:[true, 'enter task description']
    },
    isComplete: {
        type: Boolean,
        default: false
    },
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        required:[true, 'project is not available']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Task', taskSchema)