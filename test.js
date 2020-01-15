const express = require('express');
const router = express.Router();
const path = require('path');
//usar pagination como middleware y enviar la respuesta que nos de este middleware
router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public'))
});


module.exports = router;
