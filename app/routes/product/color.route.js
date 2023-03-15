const getNameColorbyIDProduct = require('../../controllers/product/color.controller')
const getNameColorbyID = require('../../controllers/product/color.controller')
const addColor = require('../../controllers/product/color.controller')
const getAllColor = require('../../controllers/product/color.controller')
const removeColor = require('../../controllers/product/color.controller')
const UpdateColor = require('../../controllers/product/color.controller')
const isAdmin = require('../../middlewares/auth.middleware')

module.exports = app => {
    var router = require('express').Router();

    router.get('/color', getAllColor.getAllColor)
        .post('/color', isAdmin.isAdmin, addColor.addColor)
        .delete('/color/:id_mau_sac', isAdmin.isAdmin, removeColor.removeColor)
        .patch('/color', isAdmin.isAdmin, UpdateColor.UpdateColor)

        .get('/color/kkk', getNameColorbyID.getNameColorbyID)
        .get('/detailcolor/:id_sp', getNameColorbyIDProduct.getNameColorbyIDProduct)
    app.use(router);
}
