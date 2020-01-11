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
    name: {
        type: String,
        default: '',
        required: true
    },
    lastName: {
        type: String,
        default: '',
        required: true
    },
    phone: {
        type: Number,
        default: '',
        required: true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})

UserSchema.methods.generateHash = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8),null)
}


UserSchema.methods.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User',UserSchema)