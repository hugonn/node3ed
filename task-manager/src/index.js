const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())


app.post('/users', (req,res) =>{
    const user = new User(req.body)
    console.log(user)
    
    user.save().then(() =>{
        console.log("foi")
        res.send(user)

    }).catch((e)=>{
        res.status(400).send(e)
    })
})

app.get('/users/:id',(req,res) => {

    const _id =  req.params.id
    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send()
        }

        res.send(user)
    }).catch(() => {
        return res.status(500).send() 
    })
})

app.get('/tasks',(req,res) => {

    Task.find({}).then((tasks) =>{
        res.send(tasks)
    }).catch((e)=>{
        res.status(500).send(e)
    })
})


app.get('/tasks/:id',(req,res) => {

    const _id =  req.params.id
    Task.findById(_id).then((task)=>{
        if(!task){
            return res.status(404).send()
        }

        res.send(task)
    }).catch(() => {
        return res.status(500).send() 
    })
})

app.post('/tasks', (req,res) =>{
    const model = new Model(req.body)
    console.log(model)
    
    model.save().then(() =>{
        console.log("foi")
        res.send(model)

    }).catch((e)=>{
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log("Server rodando: " + port);
})

