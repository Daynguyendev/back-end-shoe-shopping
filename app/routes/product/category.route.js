const getAllCategory = require('../../controllers/product/category.controller')
const addCategory = require('../../controllers/product/category.controller')
const removeCategory = require('../../controllers/product/category.controller')
const UpdateCategory = require('../../controllers/product/category.controller')
const isAdmin = require('../../middlewares/auth.middleware')

module.exports = app => {
    var router = require('express').Router();

    router.get('/category', getAllCategory.getAllCategory)
        .post('/category', isAdmin.isAdmin, addCategory.addCategory)
        .patch('/category', isAdmin.isAdmin, UpdateCategory.UpdateCategory)
        .delete('/category/:id_loai_sp', isAdmin.isAdmin, removeCategory.removeCategory)

    app.use(router);
}