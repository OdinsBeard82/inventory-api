const { Item, Category } = require('../models');

async function listItems(req, res) {
    try {
        const items = await Item.findAll({ include: Category });
        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch items" });
    }
}

async function createItemPage(req, res) {
    const categories = await Category.findAll();
    res.json(categories);
}

async function createItem(req, res) {
    const { name, description, quantity, price, categoryId } = req.body;
    await Item.create({ name, description, quantity, price, categoryId });
    res.status(201).json({ message: "Item created" });
}

async function editItemPage(req, res) {
    const item = await Item.findByPk(req.params.id);
    const categories = await Category.findAll();
    res.json({ item, categories });
}

async function updateItem(req, res) {
    const { name, description, quantity, price, categoryId } = req.body;
    await Item.update(
        { name, description, quantity, price, categoryId },
        { where: { id: req.params.id } }
    );
    res.json({ message: "Item updated" });
}

async function deleteItem(req, res) {
    await Item.destroy({ where: { id: req.params.id } });
    res.json({ message: "Item deleted" });
}

module.exports = {
    listItems,
    createItemPage,
    createItem,
    editItemPage,
    updateItem,
    deleteItem
};