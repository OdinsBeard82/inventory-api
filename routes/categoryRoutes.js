const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.listCategories);
router.post('/', categoryController.createCategory);
router.get('/:id/edit', categoryController.editCategoryPage);
router.post('/:id', categoryController.updateCategory);
router.post('/:id/delete', categoryController.deleteCategory);

module.exports = router;