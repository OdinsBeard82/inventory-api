const express = require('express');
const router = express.Router();
const { Item, Category } = require('../models');

router.get('/items', async (req, res) => {
    const items = await Item.findAll({ include: Category });
    res.render('items', { items });
});

router.get('/items/create', async (req, res) => {
    const categories = await Category.findAll();
    res.render('createItem', { categories });
});

router.post('/items', async (req, res) => {
    const { name, description, quantity, price, category_id } = req.body;
    await Item.create({ name, description, quantity, price, category_id });
    res.redirect('/items');
});

router.get('/items/:id/edit', async (req, res) => {
    const item = await Item.findByPk(req.params.id);
    const categories = await Category.findAll();
    res.render('updateItem', { item, categories });
});

router.post('/items/:id', async (req, res) => {
    const { name, description, quantity, price, category_id } = req.body;
    await Item.update({ name, description, quantity, price, category_id }, { where: { id: req.params.id } });
    res.redirect('/items');
});

router.post('/items/:id/delete', async (req, res) => {
    await Item.destroy({ where: { id: req.params.id } });
    res.redirect('/items');
});

module.exports = router;
