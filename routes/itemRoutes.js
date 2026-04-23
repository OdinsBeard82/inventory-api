const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const requireAuth = require('../middleware/authMiddleware');

router.get('/', requireAuth, itemController.listItems);
router.post('/', requireAuth, itemController.createItem);
router.put('/:id', requireAuth, itemController.updateItem);
router.delete('/:id', requireAuth, itemController.deleteItem);

module.exports = router;