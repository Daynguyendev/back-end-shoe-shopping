const getQuantityInCart = require('../../controllers/product/productdetail.controller')
const UpdateQuantityProduct = require('../../controllers/product/productdetail.controller')
const getAllProduct = require('../../controllers/product/productdetail.controller')
const addDetailProduct = require('../../controllers/product/productdetail.controller')
const removeDetailProduct = require('../../controllers/product/productdetail.controller')
const UpdateDetailProduct = require('../../controllers/product/productdetail.controller')
const getAllDetailProduct = require('../../controllers/product/productdetail.controller')

module.exports = app => {
    var router = require('express').Router();
    router.get('/all', getAllProduct.getAllProduct)
        .post('/quantitycart/all', getQuantityInCart.getQuantityInCart)
        .patch('/all', UpdateDetailProduct.UpdateDetailProduct)
        .delete('/all', removeDetailProduct.removeDetailProduct)

        .get('/all/:id_sp', getAllDetailProduct.getAllDetailProduct)
        .post('/all', addDetailProduct.addDetailProduct)

        // .post('/getid/id', getItemByIDItem.getItemByIDItem)

        .post('/all/quantity', UpdateQuantityProduct.UpdateQuantityProduct)
    app.use(router);
}
