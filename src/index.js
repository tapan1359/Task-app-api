const express = require('express')

require('./db/mongodb')
const User = require('./models/user.js')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

//Users/tapanparmar/mongodb/bin/mongod --dbpath=/Users/tapanparmar/mongodb-data