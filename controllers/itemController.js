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
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch categories" });
    }
}

async function createItem(req, res) {
    try {
        const { name, description, quantity, price, categoryId } = req.body;
        await Item.create({ name, description, quantity, price, categoryId });
        res.status(201).json({ message: "Item created" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create item" });
    }
}

async function editItemPage(req, res) {
    try {
        const item = await Item.findByPk(req.params.id);
        const categories = await Category.findAll();
        res.json({ item, categories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch item" });
    }
}

async function updateItem(req, res) {
    try {
        const { name, description, quantity, price, categoryId } = req.body;
        await Item.update(
            { name, description, quantity, price, categoryId },
            { where: { id: req.params.id } }
        );
        res.json({ message: "Item updated" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update item" });
    }
}

async function deleteItem(req, res) {
    try {
        const deleted = await Item.destroy({ where: { id: req.params.id } });

        if (!deleted) {
            return res.status(404).json({ error: "Item not found" });
        }

        res.json({ message: "Item deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete item" });
    }
}

module.exports = {
    listItems,
    createItemPage,
    createItem,
    editItemPage,
    updateItem,
    deleteItem
};