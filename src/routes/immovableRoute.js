const express = require('express');
const router = express.Router();
const pagination = require('./pagination')
const Immovable = require('../models/Immovable');
const ObjectId = require('mongoose').Types.ObjectId; 
//usar pagination como middleware y enviar la respuesta que nos de este middleware
router.get('/', pagination(Immovable), async (req, res) => {
  res.json(res.paginatedresults);
});

router.get('/:id', async (req, res) => {
  const immovable = await Immovable.find({_id: new ObjectId(req.params.id)});
  res.json(immovable);
});

router.post('/', async (req, res) => {
  const immovable = req.body;
  const newImmovable = new Immovable(immovable);
  await newImmovable.save();
  res.json({status: 'Saved'});
});

router.put('/:id', async (req, res) => {
  const immovable = req.body;
  const newImmovable = immovable;
  await Immovable.findByIdAndUpdate(req.params.id, newImmovable);
  res.json({status: 'Updated'});
});

router.delete('/:id', async (req, res) => {
  await Immovable.findByIdAndRemove(req.params.id);
  res.json({status: 'Deleted'});
});

module.exports = router;
