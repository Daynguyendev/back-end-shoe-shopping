
const getStatusByIdBill = require('../../controllers/invoiceoutput/invoiceoutput.controller')
const checkUserRate = require('../../controllers/invoiceoutput/invoiceoutput.controller')
const addInvoiceOutput = require('../../controllers/invoiceoutput/invoiceoutput.controller')
const removeInvoiceOutput = require('../../controllers/invoiceoutput/invoiceoutput.controller')
const UpdateInvoiceOutput = require('../../controllers/invoiceoutput/invoiceoutput.controller')
const getAllInvoiceOutput = require('../../controllers/invoiceoutput/invoiceoutput.controller')


module.exports = app => {
    var router = require('express').Router();
    router.get('/invoiceoutput', getAllInvoiceOutput.getAllInvoiceOutput)
        .patch('/invoiceoutput', UpdateInvoiceOutput.UpdateInvoiceOutput)
        .post('/invoiceoutput', addInvoiceOutput.addInvoiceOutput)
        .delete('/invoiceoutput', removeInvoiceOutput.removeInvoiceOutput)
        .post('/invoiceoutput/id', getStatusByIdBill.getStatusByIdBill)
        .post('/invoiceoutput/id/:id_khach_hang', checkUserRate.checkUserRate)
    app.use(router);
}
