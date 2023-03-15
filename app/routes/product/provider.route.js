const addProvider = require('../../controllers/product/provider.controller')
const removeProvider = require('../../controllers/product/provider.controller')
const getAllProvider = require('../../controllers/product/provider.controller')
const UpdateProvider = require('../../controllers/product/provider.controller')
const isAdmin = require('../../middlewares/auth.middleware')

module.exports = app => {
    var router = require('express').Router();
    router.get('/provider', getAllProvider.getAllProvider)
        .post('/provider', isAdmin.isAdmin, addProvider.addProvider)
        .delete('/provider/:id_nha_cc', isAdmin.isAdmin, removeProvider.removeProvider)
        .patch('/provider', isAdmin.isAdmin, UpdateProvider.UpdateProvider)

    app.use(router);
}
