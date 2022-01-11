const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type:String, required: true }, 
    lastname: { type:String, required: true }, 
    email: { type:String, required: true }, 
    password: { type:String, required: true },
    urlphoto: { type:String, required: true },
    country: { type:String, required: false },
    google: {type:Boolean, default: false},
    control: {type:Boolean, default: true},
})

const User = mongoose.model('User', userSchema)

module.exports = User