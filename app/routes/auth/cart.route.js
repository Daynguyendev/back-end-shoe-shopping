const removeAllCart = require('../../controllers/auth/cart.controller')
const UpdateQuantityButton = require('../../controllers/auth/cart.controller')
const getDetailByID = require('../../controllers/auth/cart.controller')
const updateQuantityCart = require('../../controllers/auth/cart.controller')
const addCart = require('../../controllers/auth/cart.controller')
const removeCart = require('../../controllers/auth/cart.controller')
const getAllItemCart = require('../../controllers/auth/cart.controller')
const UpdateCart = require('../../controllers/auth/cart.controller')
const getAllItemCartById = require('../../controllers/auth/cart.controller')
const getAllItemCartSPById = require('../../controllers/auth/cart.controller')
const getQuantityInCart = require('../../controllers/product/productdetail.controller')

module.exports = app => {
    const router = require('express').Router();

    router.get('/cart/:id', getAllItemCart.getAllItemCart)
        .post('/cart/:id', getDetailByID.getDetailByID)
        .post('/cart', addCart.addCart)
        .post('/quantitycart/all', getQuantityInCart.getQuantityInCart)
        .delete('/cart/all/:id_khach_hang', removeAllCart.removeAllCart)
        .delete('/cart/:id_sp/:id_khach_hang/:id_mau_sac/:id_kich_thuoc', removeCart.removeCart)
        .patch('/cart', UpdateCart.UpdateCart)
        .get('/cart/join/:id', getAllItemCartSPById.getAllItemCartSPById)
        .patch('/cart/quantity', updateQuantityCart.UpdateQuantityCart)
        .patch('/cart/quantitybutton', UpdateQuantityButton.UpdateQuantityButton)
    app.use(router);
}
