const { Category } = require('../models');

async function listCategories(req, res) {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch categories" });
    }
}

async function createCategory(req, res) {
    const { name, description } = req.body;

    const category = await Category.create({ name, description });

    res.status(201).json(category);
}

async function updateCategory(req, res) {
    const { name, description } = req.body;

    await Category.update(
        { name, description },
        { where: { id: req.params.id } }
    );

    res.json({ message: "Category updated" });
}

async function deleteCategory(req, res) {
    await Category.destroy({ where: { id: req.params.id } });
    res.json({ message: "Category deleted" });
}

module.exports = {
    listCategories,
    createCategory,
    editCategoryPage,
    updateCategory,
    deleteCategory
};