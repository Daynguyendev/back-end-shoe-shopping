const getAllCategory = require('../../controllers/product/category.controller')
const addCategory = require('../../controllers/product/category.controller')
const removeCategory = require('../../controllers/product/category.controller')

module.exports = app => {
    var router = require('express').Router();

    router.get('/category', getAllCategory.getAllCategory)
        .post('/category', addCategory.addCategory)
        .delete('/category', removeCategory.removeCategory)

    app.use(router);
}