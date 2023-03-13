const getAllInvoiceInput = require('../../controllers/invoiceinput/invoiceinput.controller')
const removeInvoiceInput = require('../../controllers/invoiceinput/invoiceinput.controller')
const addInvoiceInput = require('../../controllers/invoiceinput/invoiceinput.controller')
const getInvoiceByID = require('../../controllers/invoiceinput/invoiceinput.controller')



module.exports = app => {
    var router = require('express').Router();
    router.get('/invoice/:name', getInvoiceByID.getInvoiceByID)
        .get('/invoice', getAllInvoiceInput.getAllInvoiceInput)
        .post('/invoice', addInvoiceInput.addInvoiceInput)
        .delete('/invoice', removeInvoiceInput.removeInvoiceInput)
    app.use(router);
}
