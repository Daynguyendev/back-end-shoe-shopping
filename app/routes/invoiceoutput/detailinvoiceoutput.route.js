const getDetailInvoiceByID = require('../../controllers/invoiceoutput/detailinvoiceoutput.controller')
const addDetailInvoiceOutput = require('../../controllers/invoiceoutput/detailinvoiceoutput.controller')
const removeDetailInvoiceOutput = require('../../controllers/invoiceoutput/detailinvoiceoutput.controller')
const getAllDetailInvoiceOutput = require('../../controllers/invoiceoutput/detailinvoiceoutput.controller')
const getBill = require('../../controllers/invoiceoutput/detailinvoiceoutput.controller')

module.exports = app => {
    var router = require('express').Router();
    router.get('/detailinvoiceoutput', getAllDetailInvoiceOutput.getAllDetailInvoiceOutput)
        .post('/detailinvoiceoutput', addDetailInvoiceOutput.addDetailInvoiceOutput)
        .delete('/detailinvoiceoutput', removeDetailInvoiceOutput.removeDetailInvoiceOutput)
        .get('/detailinvoiceoutput/query', getBill.getBill)
        .post('/invoiceoutput/detail', getDetailInvoiceByID.getDetailInvoiceByID)
    app.use(router);
}
