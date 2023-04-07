
const addCheckoutVNPAY = require('../../controllers/bill/checkoutVNPAY.controller')
const getCheckoutVNPAY = require('../../controllers/bill/checkoutVNPAY.controller')
const returnCheckoutVNPAY = require('../../controllers/bill/checkoutVNPAY.controller')
module.exports = app => {
    var router = require('express').Router();

    router.post('/create_payment_url', addCheckoutVNPAY.addCheckoutVNPAY)
        .get('/vnpay_ipn', getCheckoutVNPAY.getCheckoutVNPAY)
        .get('/vnpay_return', returnCheckoutVNPAY.returnCheckoutVNPAY)
    app.use(router);
}