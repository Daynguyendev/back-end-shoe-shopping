const login = require('../controllers/auth/login.controller');
const register = require('../controllers/auth/register.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const forgotPassword = require('../controllers/auth/forgotPassword.controller');
const addDiachi = require('../controllers/auth/address.controller')
const addColor = require('../controllers/product/color.controller')
const getAllColor = require('../controllers/product/color.controller')
const removeColor = require('../controllers/product/color.controller')
const getAllSize = require('../controllers/product/size.controller')
const addSize = require('../controllers/product/size.controller')
const removeSize = require('../controllers/product/size.controller')
const removeDiachi = require('../controllers/auth/address.controller')
const getAlltrademark = require('../controllers/product/trademark.controller')
const addTrademark = require('../controllers/product/trademark.controller')
const removeTrademark = require('../controllers/product/trademark.controller')
const getAllCategory = require('../controllers/product/category.controller')
const addCategory = require('../controllers/product/category.controller')
const removeCategory = require('../controllers/product/category.controller')
const addImage = require('../controllers/product/image.controller')
const removeImage = require('../controllers/product/image.controller')
const getAllDiscount = require('../controllers/product/discount.controller')
const addDiscount = require('../controllers/product/discount.controller')
const removeDiscount = require('../controllers/product/discount.controller')
const getItemByID = require('../controllers/product/image.controller')
const addProduct = require('../controllers/product/product.controller')
const getAllItemProduct = require('../controllers/product/product.controller')
const getItemByIDImage = require('../controllers/product/product.controller')
const removeProduct = require('../controllers/product/product.controller')
const addStatus = require('../controllers/bill/status.controller')
const removeStatus = require('../controllers/bill/status.controller')
const addRate = require('../controllers/bill/rate.controller')
const removeRate = require('../controllers/bill/rate.controller')
const addCart = require('../controllers/auth/cart.controller')
const removeCart = require('../controllers/auth/cart.controller')
const getAllItemCart = require('../controllers/auth/cart.controller')
const addProvider = require('../controllers/product/provider.controller')
const removeProvider = require('../controllers/product/provider.controller')
const getAllProvider = require('../controllers/product/provider.controller')



module.exports = app => {
    var router = require('express').Router();

    router.get('/login', authMiddleware.isAuth, login.showLoginForm)
        .post('/login', login.login)
        .get('/register', authMiddleware.isAuth, register.create)
        .post('/register', register.register)

        .post('/account', addDiachi.addDiachi)
        .delete('/account', removeDiachi.removeDiachi)

        .get('/product/color', getAllColor.getAllColor)
        .post('/product/color', addColor.addColor)
        .delete('/product/color', removeColor.removeColor)

        .get('/product/trademark', getAlltrademark.getAlltrademark)
        .post('/product/trademark', addTrademark.addTrademark)
        .delete('/product/trademark', removeTrademark.removeTrademark)

        .get('/product/size', getAllSize.getAllSize)
        .post('/product/size', addSize.addSize)
        .delete('/product/size', removeSize.removeSize)

        .get('/product/category', getAllCategory.getAllCategory)
        .post('/product/category', addCategory.addCategory)
        .delete('/product/category', removeCategory.removeCategory)

        .get('/product/discount', getAllDiscount.getAllDiscount)
        .post('/product/discount', addDiscount.addDiscount)
        .delete('/product/discount', removeDiscount.removeDiscount)

        .get('/product/provider', getAllProvider.getAllProvider)
        .post('/product/provider', addProvider.addProvider)
        .delete('/product/provider', removeProvider.removeProvider)



        .get('/product', getAllItemProduct.getAllItemProduct)
        .post('/product', addProduct.addProduct)
        .delete('/product', removeProduct.removeProduct)

        .post('/bill/status', addStatus.addStatus)
        .delete('/bill/status', removeStatus.removeStatus)

        .post('/bill/rate', addRate.addRate)
        .delete('/bill/rate', removeRate.removeRate)

        .get('/cart/:id', getAllItemCart.getAllItemCart)
        .post('/cart', addCart.addCart)
        .delete('/cart', removeCart.removeCart)

        .get('/product/detail/:id', getItemByIDImage.getItemByIDImage)
        .get('/product/:id', getItemByID.getItemByID)
        .post('/product/:id', addImage.addImage)
        .delete('/product/:id', removeImage.removeImage)













    // .get('/logout', authMiddleware.loggedin, login.logout)

    // .get('/verify', register.verify)

    // .get('/password/reset', forgotPassword.showForgotForm)
    // .post('/password/email', forgotPassword.sendResetLinkEmail)

    // .get('/password/reset/:email', forgotPassword.showResetForm)
    // .post('/password/reset', forgotPassword.reset)




    app.use(router);
}