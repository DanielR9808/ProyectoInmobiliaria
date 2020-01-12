const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
            type: String,
            default: '',
            required: true 
        },
    password: {
        type: String,
        default: '',
        required: true
    }, 
    firstname: {
        type: String,
        default: '',
    },
    lastname: {
        type: String,
        default: ''
    },
    phone: {
        type: Number
    }
})

module.exports = mongoose.model('User',UserSchema)