const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/items', itemController.listItems);
router.get('/items/create', itemController.createItemPage);
router.post('/items', itemController.createItem);
router.get('/items/:id/edit', itemController.editItemPage);
router.post('/items/:id', itemController.updateItem);
router.post('/items/:id/delete', itemController.deleteItem);

module.exports = router;