
const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['appetizer', 'main', 'dessert', 'beverage', 'sides', 'breakfast', 'lunch', 'dinner'],
    required: true
  },
  tags: [String],
  ingredients: [String],
  nutritionalInfo: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number
  },
  spicyLevel: {
    type: Number,
    enum: [1, 2, 3],
    default: 1
  },
  vegetarian: {
    type: Boolean,
    default: false
  },
  glutenFree: {
    type: Boolean,
    default: false
  },
  featured: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Food', FoodSchema);
