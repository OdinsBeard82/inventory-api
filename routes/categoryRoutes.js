const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/categories', categoryController.listCategories);
router.get('/categories/create', categoryController.createCategoryPage);
router.post('/categories', categoryController.createCategory);
router.get('/categories/:id/edit', categoryController.editCategoryPage);
router.post('/categories/:id', categoryController.updateCategory);
router.post('/categories/:id/delete', categoryController.deleteCategory);

module.exports = router;