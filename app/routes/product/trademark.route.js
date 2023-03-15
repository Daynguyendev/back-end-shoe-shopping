
const getAlltrademark = require('../../controllers/product/trademark.controller')
const addTrademark = require('../../controllers/product/trademark.controller')
const removeTrademark = require('../../controllers/product/trademark.controller')
const UpdateTrademark = require('../../controllers/product/trademark.controller')
const isAdmin = require('../../middlewares/auth.middleware')

module.exports = app => {
    var router = require('express').Router();
    router.get('/trademark', getAlltrademark.getAlltrademark)
        .post('/trademark', isAdmin.isAdmin, addTrademark.addTrademark)
        .delete('/trademark/:id_thuong_hieu', isAdmin.isAdmin, removeTrademark.removeTrademark)
        .patch('/trademark', isAdmin.isAdmin, UpdateTrademark.UpdateTrademark)

    app.use(router);
}
