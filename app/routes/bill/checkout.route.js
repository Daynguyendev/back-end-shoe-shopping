const addCheckout = require('../../controllers/bill/checkout.controller')
const removeCheckout = require('../../controllers/bill/checkout.controller')
const UpdateCheckout = require('../../controllers/bill/checkout.controller')
const getAllCheckout = require('../../controllers/bill/checkout.controller')
const isAdmin = require('../../middlewares/auth.middleware')

module.exports = app => {
    var router = require('express').Router();

    router.get('/checkout', getAllCheckout.getAllCheckout)
        .patch('/checkout', isAdmin.isAdmin, UpdateCheckout.UpdateCheckout)
        .post('/checkout', addCheckout.addCheckout)
        .delete('/checkout', isAdmin.isAdmin, removeCheckout.removeCheckout)
    app.use(router);
}