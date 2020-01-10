const express = require('express');
const router = express.Router();

const Immovable = require('../models/Immovable');

router.get('/', async (req, res) => {
  const immovable = await Immovable.find();
  res.json(immovable);
});

router.get('/:id', async (req, res) => {
  const immovable = await Immovable.findById(req.params.id);
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
