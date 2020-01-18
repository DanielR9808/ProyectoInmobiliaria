const express = require('express');
const router = express.Router();
const User = require('../models/User')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const {registerValidation, loginValidation} = require('../models/validationUser')


router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body)
    
    if (error) {
        return res.send(error.details[0].message).status(403)
    }


    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        return res.send('El email o la contrasena es incorrecto').status(403)
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password)

    if (!validPassword) {
        return res.send('El email o la contrasena es incorrecto').status(403)
    }

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)

    res.header('auth-token',token).send(token)

})


router.post('/register', async (req, res) => {
    const { error } = registerValidation(req.body)
    if (error) {
        return res.send(error.details[0].message)
    }

    const emailExist = await User.findOne({email:req.body.email})

    if (emailExist) {
        return res.send('El email ya ha sido usado').status(403)
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        phone: req.body.phone,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: hashedPassword
    })

    try {
        await user.save()
        res.send({user:user_id})
    } catch (error) {
        res.send(error).status(403)
    }

})

module.exports = router;
