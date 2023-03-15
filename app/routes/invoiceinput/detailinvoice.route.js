const addDetailInvoice = require('../../controllers/invoiceinput/detailinvoice.controller')
const getAllDetailInvoice = require('../../controllers/invoiceinput/detailinvoice.controller')
const removeDetailInvoice = require('../../controllers/invoiceinput/detailinvoice.controller')
const getDetailInvoiceByName = require('../../controllers/invoiceinput/detailinvoice.controller')
const UpdateDetailInvoice = require('../../controllers/invoiceinput/detailinvoice.controller')
const isAdmin = require('../../middlewares/auth.middleware')

module.exports = app => {
    var router = require('express').Router();

    router.get('/detailinvoice', isAdmin.isAdmin, getAllDetailInvoice.getAllDetailInvoice)
        .get('/detailinvoice/:ten_hoa_don_nhap', isAdmin.isAdmin, getDetailInvoiceByName.getDetailInvoiceByName)
        .post('/detailinvoice', isAdmin.isAdmin, addDetailInvoice.addDetailInvoice)
        .delete('/detailinvoice/:id_chi_tiet_hd', isAdmin.isAdmin, removeDetailInvoice.removeDetailInvoice)
        .patch('/detailinvoice', isAdmin.isAdmin, UpdateDetailInvoice.UpdateDetailInvoice)

    app.use(router);
}
