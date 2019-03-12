//CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectID

// mesma coisa que as linhas acima
const{ MongoClient, ObjectID} = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const dataBaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionUrl, {useNewUrlParser : true}, (error,client) => {
    
    if(error)
        return console.log('cannot connect to db')

    //console.log('Connected')

    const db = client.db(dataBaseName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Hugo4',
    //     age: 26
    // }, (error, result) => {
    //     if(error)
    //         return console.log('deu ruim de novo')

    //     console.log(result.ops)
    // })

    // db.collection('users').insertOne({
    //     name: 'Hugo',
    //     age: 26
    
    // },(error, result) => {

    //     if(error)
    //         return console.log('unable to insert user')

    //     console.log(result.ops)
        
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'Hugo2',
    //         age: 26
    //     }, {
    //         name:'Hugo3',
    //         age: 26
    //     }
    // ], (erorr,result) =>{

    //     if(error)
    //         return console.log('deu ruim')

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },{
    //         description: 'Renew the inspection',
    //         completed: false

    //     },{
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ],(error, result) => {

    //     if(error)
    //         return console.log('deu ruim')

    //     console.log(result.ops)
    
    // })

//    db.collection('users').find({age:26}).toArray((error,users) => {

//         if(error)
//             return console.log('deu ruim')

//         console.log(users)

//    })

//     db.collection('users').find({age:26}).count((error,count) => {

//         if(error)
//             return console.log('deu ruim')

//         console.log(count)

//     })

//     db.collection('users').updateOne({
//         name:'Hugo2'
//     },{
//         $set:{
//             name:'hugo2'
//         },
//         $inc:{
//             age: 1
//         }
//     }).then((result) => {
//         console.log(result)
//                                 // Promisses 
//     }).catch((error) => {

//         console.log(error)
//     })


    // db.collection('tasks').updateMany({
    //     completed :false
    // },{
    //     $set:{
    //         completed: true
    //     }

    // }).then((result) => {
    //     console.log(result.modifiedCount)
    //                                          // Promisses 
    // }).catch((error) => {

    //     console.log(error)
    // })
   
    // db.collection('users').deleteMany({
    //     age:26
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    //                                          // Promisses 
    // }).catch((error) => {

    //     console.log(error)
    // })
    
    db.collection('users').deleteOne({
        _id: new ObjectID("5c866e752f732a2d4cee0c8f")
    }).then((result) => {
        console.log(result.modifiedCount)
                                             // Promises 
    }).catch((error) => {

        console.log(error)
    })
})