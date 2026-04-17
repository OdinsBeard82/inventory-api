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
    try {
        const { name, description } = req.body;

        if (!name || !name.trim()) {
            return res.status(400).json({ error: "Name is required" });
        }

        const category = await Category.create({
            name: name.trim(),
            description
        });

        res.status(201).json({ message: "Category created", category });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create category" });
    }
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