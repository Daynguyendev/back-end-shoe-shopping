const getItemByIDItem = require('../../controllers/product/product.controller')
const getItemByName = require('../../controllers/product/product.controller')
const getItemByCategory = require('../../controllers/product/product.controller')
// const getItemByID = require('../../controllers/product/image.controller')
const addProduct = require('../../controllers/product/product.controller')
const getAllItemProduct = require('../../controllers/product/product.controller')
// const getAllImage = require('../../controllers/product/image.controller')
const getItemByIDProduct = require('../../controllers/product/product.controller')
const removeProduct = require('../../controllers/product/product.controller')
const getAllItemProductHasPromotion = require('../../controllers/product/product.controller')
const isAdmin = require('../../middlewares/auth.middleware')

module.exports = app => {
    var router = require('express').Router();

    router.get('/productsale', getAllItemProductHasPromotion.getAllItemProductHasPromotion)
        .get('/product/:ten_thuong_hieu', getItemByName.getItemByName)
        .get('/product/category/:id_loai_sp', getItemByCategory.getItemByCategory)
        .get('/product', getAllItemProduct.getAllItemProduct)
        .post('/product', addProduct.addProduct)
        .delete('/product', isAdmin.isAdmin, removeProduct.removeProduct)
        .post('/product/getid/id', getItemByIDItem.getItemByIDItem)
        .get('/product/detail/:id_sp', getItemByIDProduct.getItemByIDProduct)
    app.use(router);
}