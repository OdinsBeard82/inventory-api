const { Item, Category } = require('../models');

async function listItems(req, res) {
    const items = await Item.findAll({ include: Category });
    res.render('items', { items });
}

async function createItemPage(req, res) {
    const categories = await Category.findAll();
    res.render('createItem', { categories });
}

async function createItem(req, res) {
    const { name, description, quantity, price, category_id } = req.body;
    await Item.create({ name, description, quantity, price, category_id });
    res.redirect('/items');
}

async function editItemPage(req, res) {
    const item = await Item.findByPk(req.params.id);
    const categories = await Category.findAll();
    res.render('updateItem', { item, categories });
}

async function updateItem(req, res) {
    const { name, description, quantity, price, category_id } = req.body;
    await Item.update(
        { name, description, quantity, price, category_id },
        { where: { id: req.params.id } }
    );
    res.redirect('/items');
}

async function deleteItem(req, res) {
    await Item.destroy({ where: { id: req.params.id } });
    res.redirect('/items');
}

module.exports = {
    listItems,
    createItemPage,
    createItem,
    editItemPage,
    updateItem,
    deleteItem
};