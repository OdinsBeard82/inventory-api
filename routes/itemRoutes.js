const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const requireAuth = require('../middleware/authMiddleware');

// list items (public)
router.get('/', itemController.listItems);

// create item page (protected)
router.get('/create', requireAuth, itemController.createItemPage);

// create item (protected)
router.post('/', requireAuth, itemController.createItem);

// edit page
router.get('/:id/edit', requireAuth, itemController.editItemPage);

// update
router.post('/:id', requireAuth, itemController.updateItem);

// delete
router.post('/:id/delete', requireAuth, itemController.deleteItem);

module.exports = router;