const { Category } = require('../models');

async function listCategories(req, res) {
    const categories = await Category.findAll();
    res.render('categories', { categories });
}

async function createCategoryPage(req, res) {
    res.render('createCategory');
}

async function createCategory(req, res) {
    const { name, description } = req.body;
    await Category.create({ name, description });
    res.redirect('/categories');
}

async function editCategoryPage(req, res) {
    const category = await Category.findByPk(req.params.id);
    res.render('updateCategory', { category });
}

async function updateCategory(req, res) {
    const { name, description } = req.body;
    await Category.update(
        { name, description },
        { where: { id: req.params.id } }
    );
    res.redirect('/categories');
}

async function deleteCategory(req, res) {
    await Category.destroy({ where: { id: req.params.id } });
    res.redirect('/categories');
}

module.exports = {
    listCategories,
    createCategoryPage,
    createCategory,
    editCategoryPage,
    updateCategory,
    deleteCategory
};