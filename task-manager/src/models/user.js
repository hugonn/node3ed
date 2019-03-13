const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    name:{
        type: String,
        required: true
    },
    age:{                                 // new model
        type: Number,
        validate(value){
            if(value <0)
                throw new Error('Idade precisa ser maior que zero')
        } 
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error("Email inválido")
        }
    }
})

module.exports = User