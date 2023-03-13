const getNameColorbyIDProduct = require('../../controllers/product/color.controller')
const getNameColorbyID = require('../../controllers/product/color.controller')
const addColor = require('../../controllers/product/color.controller')
const getAllColor = require('../../controllers/product/color.controller')
const removeColor = require('../../controllers/product/color.controller')


module.exports = app => {
    var router = require('express').Router();

    router.get('/color', getAllColor.getAllColor)
        .post('/color', addColor.addColor)
        .delete('/color', removeColor.removeColor)
        .get('/color/kkk', getNameColorbyID.getNameColorbyID)
        .get('/detailcolor/:id_sp', getNameColorbyIDProduct.getNameColorbyIDProduct)
    app.use(router);
}
