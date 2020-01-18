const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImmovableSchema = new Schema({
  Adress: { type: String, required: true},
  Bathrooms: { type: Number, required: true },
  Bedrooms: { type: Number, required: true },
  BuiltArea: { type: Number, required: true },
  BuiltTime: { type: String, required: true },
  CommonAreas: { type: Array, required: true },
  Currency: { type: String, required: true },
  Details: { type: String, required: true },
  ImmobavleType: { type: String, required: true },
  ImmovableNumber: { type: Number, required: true },
  ImmovableState: { type: String, required: true },
  InCondo: { type: Boolean, required: true },
  IsBuilt: { type: Boolean, required: true },
  KitchenType: { type: String, required: true },
  Levels: { type: Number, required: true },
  Neighbourhood: { type: String, required: true },
  Parking: { type: Number, required: true },
  RentCost: { type: Number, required: true },
  BuyCost:{type:Number, required:true},
  Zone: { type: String, required: true },
});

module.exports = mongoose.model('Immovable', ImmovableSchema);
