const login = require('../controllers/auth/login.controller');
const register = require('../controllers/auth/register.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const forgotPassword = require('../controllers/auth/forgotPassword.controller');
const loggedin = require('../middlewares/auth.middleware')
const addDiachi = require('../controllers/auth/address.controller')

const getNameColorbyID = require('../controllers/product/color.controller')
const addColor = require('../controllers/product/color.controller')
const getAllColor = require('../controllers/product/color.controller')
const removeColor = require('../controllers/product/color.controller')

const getNameSizebyID = require('../controllers/product/size.controller')
const getAllSize = require('../controllers/product/size.controller')
const addSize = require('../controllers/product/size.controller')
const removeSize = require('../controllers/product/size.controller')

const GetAddressById = require('../controllers/auth/address.controller')
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
const UpdateDisCount = require('../controllers/product/discount.controller')
const addDiscount = require('../controllers/product/discount.controller')
const removeDiscount = require('../controllers/product/discount.controller')

const getItemByID = require('../controllers/product/image.controller')
const addProduct = require('../controllers/product/product.controller')
const getAllItemProduct = require('../controllers/product/product.controller')
const getAllImage = require('../controllers/product/image.controller')
const getItemByIDImage = require('../controllers/product/product.controller')
const removeProduct = require('../controllers/product/product.controller')

const UpdateStatusByIdKhIdHd = require('../controllers/bill/status.controller')
const getStatusNew = require('../controllers/bill/status.controller')
const getAllStatus = require('../controllers/bill/status.controller')
const getStatus = require('../controllers/bill/status.controller')
const addStatus = require('../controllers/bill/status.controller')
const removeStatus = require('../controllers/bill/status.controller')
const getBillByStatus = require('../controllers/bill/status.controller')

const getAllRate = require('../controllers/bill/rate.controller')
const UpdateRate = require('../controllers/bill/rate.controller')
const addRate = require('../controllers/bill/rate.controller')
const removeRate = require('../controllers/bill/rate.controller')

const removeAllCart = require('../controllers/auth/cart.controller')
const UpdateQuantityButton = require('../controllers/auth/cart.controller')
const getDetailByID = require('../controllers/auth/cart.controller')
const updateQuantityCart = require('../controllers/auth/cart.controller')
const addCart = require('../controllers/auth/cart.controller')
const removeCart = require('../controllers/auth/cart.controller')
const getAllItemCart = require('../controllers/auth/cart.controller')
const UpdateCart = require('../controllers/auth/cart.controller')
const getAllItemCartById = require('../controllers/auth/cart.controller')
const getAllItemCartSPById = require('../controllers/auth/cart.controller')


const addProvider = require('../controllers/product/provider.controller')
const removeProvider = require('../controllers/product/provider.controller')
const getAllProvider = require('../controllers/product/provider.controller')
const getAllInvoiceInput = require('../controllers/invoiceinput/invoiceinput.controller')
const removeInvoiceInput = require('../controllers/invoiceinput/invoiceinput.controller')
const addInvoiceInput = require('../controllers/invoiceinput/invoiceinput.controller')
const getInvoiceByID = require('../controllers/invoiceinput/invoiceinput.controller')
const addDetailInvoice = require('../controllers/invoiceinput/detailinvoice.controller')
const getAllDetailInvoice = require('../controllers/invoiceinput/detailinvoice.controller')
const removeDetailInvoice = require('../controllers/invoiceinput/detailinvoice.controller')

const addPromotion = require('../controllers/product/promotion.controller')
const removePromotion = require('../controllers/product/promotion.controller')
const UpdatePromotion = require('../controllers/product/promotion.controller')
const getAllPromotion = require('../controllers/product/promotion.controller')

const addCheckout = require('../controllers/bill/checkout.controller')
const removeCheckout = require('../controllers/bill/checkout.controller')
const UpdateCheckout = require('../controllers/bill/checkout.controller')
const getAllCheckout = require('../controllers/bill/checkout.controller')

const getDetailInvoiceByID = require('../controllers/invoiceoutput/detailinvoiceoutput.controller')
const addInvoiceOutput = require('../controllers/invoiceoutput/invoiceoutput.controller')
const removeInvoiceOutput = require('../controllers/invoiceoutput/invoiceoutput.controller')
const UpdateInvoiceOutput = require('../controllers/invoiceoutput/invoiceoutput.controller')
const getAllInvoiceOutput = require('../controllers/invoiceoutput/invoiceoutput.controller')

const addDetailInvoiceOutput = require('../controllers/invoiceoutput/detailinvoiceoutput.controller')
const removeDetailInvoiceOutput = require('../controllers/invoiceoutput/detailinvoiceoutput.controller')
const getAllDetailInvoiceOutput = require('../controllers/invoiceoutput/detailinvoiceoutput.controller')

// const getProductByIdSpSizeColor = require('../controllers/product/productdetail.controller')
// const getProductByIdSpSize = require('../controllers/product/productdetail.controller')
// const getProductByIdSpColor = require('../controllers/product/productdetail.controller')
const addDetailProduct = require('../controllers/product/productdetail.controller')
const removeDetailProduct = require('../controllers/product/productdetail.controller')
const UpdateDetailProduct = require('../controllers/product/productdetail.controller')
const getAllDetailProduct = require('../controllers/product/productdetail.controller')
const getIDByNameUser = require('../controllers/auth/user.controller')

module.exports = app => {
    var router = require('express').Router();

    router.get('/login', authMiddleware.isAuth)
        .post('/login', login.login, loggedin.loggedin)
        .get('/register', authMiddleware.isAuth, register.create)
        .post('/register', register.register)

        .post('/account/id', getIDByNameUser.getIDByNameUser)
        .post('/account/address', GetAddressById.GetAddressById)
        .post('/account', addDiachi.addDiachi)
        .delete('/account', removeDiachi.removeDiachi)

        .get('/product/color/kkk', getNameColorbyID.getNameColorbyID)
        .get('/product/color', getAllColor.getAllColor)
        .post('/product/color', addColor.addColor)
        .delete('/product/color', removeColor.removeColor)

        .get('/product/trademark', getAlltrademark.getAlltrademark)
        .post('/product/trademark', addTrademark.addTrademark)
        .delete('/product/trademark', removeTrademark.removeTrademark)

        .get('/product/size/id', getNameSizebyID.getNameSizebyID)
        .get('/product/size', getAllSize.getAllSize)
        .post('/product/size', addSize.addSize)
        .delete('/product/size', removeSize.removeSize)

        .get('/product/category', getAllCategory.getAllCategory)
        .post('/product/category', addCategory.addCategory)
        .delete('/product/category', removeCategory.removeCategory)

        .patch('/product/discount', UpdateDisCount.UpdateDisCount)
        .get('/product/discount', getAllDiscount.getAllDiscount)
        .post('/product/discount', addDiscount.addDiscount)
        .delete('/product/discount', removeDiscount.removeDiscount)

        // .get('/product/all/:id/color/:id_mau_sac', getProductByIdSpColor.getProductByIdSpColor)
        // .get('/product/all/:id/size/:id_kich_thuoc', getProductByIdSpSize.getProductByIdSpSize)
        // .get('/product/all/:id/size/:id_kich_thuoc/color/:id_mau_sac', getProductByIdSpSizeColor.getProductByIdSpSizeColor)
        .patch('/product/all', UpdateDetailProduct.UpdateDetailProduct)
        .get('/product/all/:id', getAllDetailProduct.getAllDetailProduct)
        .post('/product/all', addDetailProduct.addDetailProduct)
        .delete('/product/all', removeDetailProduct.removeDetailProduct)



        .get('/product/provider', getAllProvider.getAllProvider)
        .post('/product/provider', addProvider.addProvider)
        .delete('/product/provider', removeProvider.removeProvider)



        .get('/product', getAllItemProduct.getAllItemProduct)
        .post('/product', addProduct.addProduct)
        .delete('/product', removeProduct.removeProduct)



        .patch('/product/promotion', UpdatePromotion.UpdatePromotion)
        .get('/product/promotion', getAllPromotion.getAllPromotion)
        .post('/product/promotion', addPromotion.addPromotion)
        .delete('/product/promotion', removePromotion.removePromotion)


        .patch('/invoiceoutput', UpdateInvoiceOutput.UpdateInvoiceOutput)
        .get('/invoiceoutput', getAllInvoiceOutput.getAllInvoiceOutput)
        .post('/invoiceoutput', addInvoiceOutput.addInvoiceOutput)
        .delete('/invoiceoutput', removeInvoiceOutput.removeInvoiceOutput)

        .post('/invoiceoutput/detail', getDetailInvoiceByID.getDetailInvoiceByID)
        .get('/detailinvoiceoutput', getAllDetailInvoiceOutput.getAllDetailInvoiceOutput)
        .post('/detailinvoiceoutput', addDetailInvoiceOutput.addDetailInvoiceOutput)
        .delete('/detailinvoiceoutput', removeDetailInvoiceOutput.removeDetailInvoiceOutput)

        .get('/product/rate/:id_sp', getAllRate.getAllRate)
        .patch('/product/rate', UpdateRate.UpdateRate)
        .post('/product/rate', addRate.addRate)
        .delete('/product/rate', removeRate.removeRate)



        .patch('/bill/checkout', UpdateCheckout.UpdateCheckout)
        .get('/bill/checkout', getAllCheckout.getAllCheckout)
        .post('/bill/checkout', addCheckout.addCheckout)
        .delete('/bill/checkout', removeCheckout.removeCheckout)

        .get('/invoice/:name', getInvoiceByID.getInvoiceByID)

        .get('/invoice', getAllInvoiceInput.getAllInvoiceInput)
        .post('/invoice', addInvoiceInput.addInvoiceInput)
        .delete('/invoice', removeInvoiceInput.removeInvoiceInput)

        .get('/detailinvoice', getAllDetailInvoice.getAllDetailInvoice)
        .post('/detailinvoice', addDetailInvoice.addDetailInvoice)
        .delete('/detailinvoice', removeDetailInvoice.removeDetailInvoice)


        .get('/bill/status/:id_khach_hang/:id_hd_dat', getStatusNew.getStatusNew)
        .get('/bill/status', getAllStatus.getAllStatus)
        .get('/bill/status/:id_khach_hang', getStatus.getStatus)
        .post('/bill/status', addStatus.addStatus)
        .post('/bill/status/fillter', getBillByStatus.getBillByStatus)
        .delete('/bill/status', removeStatus.removeStatus)
        .patch('/bill/status', UpdateStatusByIdKhIdHd.UpdateStatusByIdKhIdHd)


        .post('/cart/:id', getDetailByID.getDetailByID)
        .get('/cart/:id', getAllItemCart.getAllItemCart)
        .post('/cart', addCart.addCart)
        .delete('/cart/all/:id_khach_hang', removeAllCart.removeAllCart)

        .delete('/cart/:id_sp/:id_khach_hang/:ten_mau_sac/:ten_kich_thuoc', removeCart.removeCart)
        .patch('/cart', UpdateCart.UpdateCart)
        .get('/cart/join/:id', getAllItemCartSPById.getAllItemCartSPById)
        .patch('/cart/quantity', updateQuantityCart.UpdateQuantityCart)
        .patch('/cart/quantitybutton', UpdateQuantityButton.UpdateQuantityButton)




        .get('/product/detail/:id', getItemByIDImage.getItemByIDImage)
        .get('/product/image/:id', getItemByID.getItemByID)

        .get('/product/image', getAllImage.getAllImage)
        .post('/product/image', addImage.addImage)
        .delete('/product/image/:id', removeImage.removeImage)













    // .get('/logout', authMiddleware.loggedin, login.logout)

    // .get('/verify', register.verify)

    // .get('/password/reset', forgotPassword.showForgotForm)
    // .post('/password/email', forgotPassword.sendResetLinkEmail)

    // .get('/password/reset/:email', forgotPassword.showResetForm)
    // .post('/password/reset', forgotPassword.reset)




    app.use(router);
}