const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser:true,
    useCreateIndex: true
})



// const me = new User({
//     name: 'Hugo',
//     age: 26                              // novo obj
// })

// me.save().then((me)=>{
//     console.log(me)                      // salvando novo obj com promises
// }).catch((error) => {
//     console.log("error: ", error)
// })

// const Task = mongoose.model('Task',{
//     description:{
//         type: String,
//         required: true,
//         trim : true
//     },
//     completed:{                                 // new model
//         type: Boolean
//     }
// })

// const task = new Task({
//     description:'Reclamar',
//     completed: true
// })

// task.save().then(() =>{
//     console.log(task)
// }).catch((error)=>{
//     console.log('error: ', error)
// })