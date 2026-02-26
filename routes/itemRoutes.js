const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const requireAuth = require('../middleware/auth');

// Public routes (read-only)
router.get('/items', itemController.listItems);
router.get('/items/create', requireAuth, itemController.createItemPage); // protect page if needed

// Protected routes (only logged-in users can modify data)
router.post('/items', requireAuth, itemController.createItem);
router.get('/items/:id/edit', requireAuth, itemController.editItemPage);
router.post('/items/:id', requireAuth, itemController.updateItem);
router.post('/items/:id/delete', requireAuth, itemController.deleteItem);

module.exports = router;