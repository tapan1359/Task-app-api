require('../src/db/mongodb')
const User = require('../src/models/user')
const Task = require('../src/models/task')

//5d647000786c396e936832f4

// User.findByIdAndUpdate('5d647000786c396e936832f4', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// Task.findByIdAndRemove('5d648832d8cd7992ddb81219').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// const updateAgeandCount = async(id, age) => {
//     const user = await User.findByIdAndUpdate(id, { age })
//     const count = await User.countDocuments({ age })
//     return count
// }

// updateAgeandCount('5d647000786c396e936832f4', 3).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    const user = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5d64883dd8cd7992ddb8121a').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})