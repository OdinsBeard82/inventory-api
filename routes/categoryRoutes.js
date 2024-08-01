const express = require('express');
const router = express.Router();
const { Category } = require('../models');

router.get('/categories', async (req, res) => {
    const categories = await Category.findAll();
    res.render('categories', { categories });
});

router.get('/categories/create', (req, res) => {
    res.render('createCategory');
});

router.post('/categories', async (req, res) => {
    const { name } = req.body;
    await Category.create({ name });
    res.redirect('/categories');
});

router.get('/categories/:id/edit', async (req, res) => {
    const category = await Category.findByPk(req.params.id);
    res.render('updateCategory', { category });
});

router.post('/categories/:id', async (req, res) => {
    const { name } = req.body;
    await Category.update({ name }, { where: { id: req.params.id } });
    res.redirect('/categories');
});

router.post('/categories/:id/delete', async (req, res) => {
    await Category.destroy({ where: { id: req.params.id } });
    res.redirect('/categories');
});

module.exports = router;
