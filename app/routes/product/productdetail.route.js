const getQuantityInCart = require('../../controllers/product/productdetail.controller')
const UpdateQuantityProduct = require('../../controllers/product/productdetail.controller')
const UpdateQuantityProductRemove = require('../../controllers/product/productdetail.controller')
const getAllProduct = require('../../controllers/product/productdetail.controller')
const addDetailProduct = require('../../controllers/product/productdetail.controller')
const removeDetailProduct = require('../../controllers/product/productdetail.controller')
const UpdateDetailProduct = require('../../controllers/product/productdetail.controller')
const getAllDetailProduct = require('../../controllers/product/productdetail.controller')
const isAdmin = require('../../middlewares/auth.middleware')

module.exports = app => {
    var router = require('express').Router();
    router.get('/all', getAllProduct.getAllProduct)
        .post('/quantitycart/all', getQuantityInCart.getQuantityInCart)
        .patch('/all', isAdmin.isAdmin, UpdateDetailProduct.UpdateDetailProduct)
        .delete('/all', isAdmin.isAdmin, removeDetailProduct.removeDetailProduct)

        .get('/all/:id_sp', getAllDetailProduct.getAllDetailProduct)
        .post('/all', isAdmin.isAdmin, addDetailProduct.addDetailProduct)

        // .post('/getid/id', getItemByIDItem.getItemByIDItem)
        .post('/all/quantity', UpdateQuantityProduct.UpdateQuantityProduct)
        .post('/all/quantityremove', UpdateQuantityProductRemove.UpdateQuantityProductRemove)

    app.use(router);
}
