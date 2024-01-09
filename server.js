const express = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require('./middleware/errorHandler.js')
const connectDb = require('./config/dbConfig.js')


connectDb()
const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use('/api/projects', require('./routes/projectRoutes.js'))
app.use('/api/tasks', require('./routes/taskRoutes.js'))
app.use(errorHandler)


app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})
