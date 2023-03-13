const addDetailInvoice = require('../../controllers/invoiceinput/detailinvoice.controller')
const getAllDetailInvoice = require('../../controllers/invoiceinput/detailinvoice.controller')
const removeDetailInvoice = require('../../controllers/invoiceinput/detailinvoice.controller')

module.exports = app => {
    var router = require('express').Router();

    router.get('/detailinvoice', getAllDetailInvoice.getAllDetailInvoice)
        .post('/detailinvoice', addDetailInvoice.addDetailInvoice)
        .delete('/detailinvoice', removeDetailInvoice.removeDetailInvoice)
    app.use(router);
}
