
const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const auth = require('../middleware/auth');

// @route   GET /api/food
// @desc    Get all food items
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category, search, minPrice, maxPrice, vegetarian, glutenFree } = req.query;
    
    // Build filter object
    const filter = {};
    
    // Category filter
    if (category && category !== 'all') {
      filter.category = category;
    }
    
    // Price range filter
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    
    // Dietary preferences
    if (vegetarian === 'true') filter.vegetarian = true;
    if (glutenFree === 'true') filter.glutenFree = true;
    
    // Search query
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }
    
    const foods = await Food.find(filter);
    res.json(foods);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET /api/food/:id
// @desc    Get food item by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    
    if (!food) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    
    res.json(food);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Food item not found' });
    }
    res.status(500).send('Server error');
  }
});

// @route   GET /api/food/category/:category
// @desc    Get food items by category
// @access  Public
router.get('/category/:category', async (req, res) => {
  try {
    const foods = await Food.find({ category: req.params.category });
    res.json(foods);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET /api/food/featured
// @desc    Get featured food items
// @access  Public
router.get('/featured/items', async (req, res) => {
  try {
    const foods = await Food.find({ featured: true });
    res.json(foods);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
