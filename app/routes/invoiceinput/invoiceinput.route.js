const getAllInvoiceInput = require('../../controllers/invoiceinput/invoiceinput.controller')
const removeInvoiceInput = require('../../controllers/invoiceinput/invoiceinput.controller')
const addInvoiceInput = require('../../controllers/invoiceinput/invoiceinput.controller')
const getInvoiceByID = require('../../controllers/invoiceinput/invoiceinput.controller')
const UpdateInvoiceInput = require('../../controllers/invoiceinput/invoiceinput.controller')
const isAdmin = require('../../middlewares/auth.middleware')


module.exports = app => {
    var router = require('express').Router();
    router.get('/invoice/:name', isAdmin.isAdmin, getInvoiceByID.getInvoiceByID)
        .get('/invoice', isAdmin.isAdmin, getAllInvoiceInput.getAllInvoiceInput)
        .post('/invoice', isAdmin.isAdmin, addInvoiceInput.addInvoiceInput)
        .delete('/invoice/:id_hd_nhap_hang', isAdmin.isAdmin, removeInvoiceInput.removeInvoiceInput)
        .patch('/invoice', isAdmin.isAdmin, UpdateInvoiceInput.UpdateInvoiceInput)

    app.use(router);
}
