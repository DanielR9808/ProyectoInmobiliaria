const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', async (req, res) => {
    
});

router.get('/:id', async (req, res) => {

});

router.post('/', async (req, res, next) => {
    const {body} = req
    const {
        firstname,
        lastname,
        email,
        password
    } = body
    if(!firstname){
        res.end({
            success:false,
            message:'Error first name cannot be blank'
        })
    }
    if (!lastname) {
        res.end({
            success: false,
            message: 'Error first name cannot be blank'
        })
    }
    if (!email) {
        res.end({
            success: false,
            message: 'Error first name cannot be blank'
        })
    }
    if (!password) {
        res.end({
            success: false,
            message: 'Error first name cannot be blank'
        })
    }

    email = email.toLowerCase()

    User.find({
        email:email
    }, (err, docs) =>{
        if (err) {
            res.end('Error')
        }else if(docs.length > 0){
            res.end('Account alredy exist')
        }
    })


});

router.delete('/:id', async (req, res) => {
    await Immovable.findByIdAndRemove(req.params.id);
    res.json({ status: 'Deleted' });
});

module.exports = router;
