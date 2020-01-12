const joi = require('@hapi/joi')

const registerValidation = (data) =>{
    const schema = {
        email: joi.string().required().email().min(6),
        password: joi.string().required().min(6),
        firstname: joi.string().required().min(6),
        lastname: joi.string().required().min(6),
        phone: joi.number()
    }
    return joi.validate(data, schema)
}

const loginValidation = (data) => {
    const schema = {
        email: joi.string().required().email().min(6),
        password: joi.string().required().min(6)
    }
    return joi.validate(data, schema)
}

module.exports.loginValidation = loginValidation

module.exports.registerValidation = registerValidation