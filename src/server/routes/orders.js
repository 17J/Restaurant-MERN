
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Food = require('../models/Food');
const auth = require('../middleware/auth');

// @route   POST /api/orders
// @desc    Create a new order
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    const { items, deliveryAddress, paymentMethod } = req.body;
    
    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No items in order' });
    }
    
    // Calculate total amount and validate items
    let totalAmount = 0;
    const orderItems = [];
    
    for (const item of items) {
      const food = await Food.findById(item.foodId);
      if (!food) {
        return res.status(404).json({ message: `Food item with ID ${item.foodId} not found` });
      }
      
      const itemTotal = food.price * item.quantity;
      totalAmount += itemTotal;
      
      orderItems.push({
        food: item.foodId,
        quantity: item.quantity,
        price: food.price
      });
    }
    
    // Create new order
    const newOrder = new Order({
      user: req.user.id,
      items: orderItems,
      totalAmount,
      deliveryAddress,
      paymentMethod
    });
    
    // Simulate payment processing based on method
    if (paymentMethod === 'card' || paymentMethod === 'upi') {
      // In a real app, this would integrate with a payment gateway
      newOrder.paymentStatus = 'completed';
    }
    
    const order = await newOrder.save();
    
    res.status(201).json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET /api/orders/user
// @desc    Get all orders for the logged-in user
// @access  Private
router.get('/user', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .populate('items.food');
    
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET /api/orders/:id
// @desc    Get order by ID
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.food');
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    // Check if the order belongs to the logged-in user
    if (order.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized to access this order' });
    }
    
    res.json(order);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(500).send('Server error');
  }
});

module.exports = router;
