const UpdateStatusByIdKhIdHd = require('../../controllers/bill/status.controller')
const getStatusNew = require('../../controllers/bill/status.controller')
const getAllStatus = require('../../controllers/bill/status.controller')
const getStatus = require('../../controllers/bill/status.controller')
const addStatus = require('../../controllers/bill/status.controller')
const removeStatus = require('../../controllers/bill/status.controller')
const getBillByStatus = require('../../controllers/bill/status.controller')
const isAdmin = require('../../middlewares/auth.middleware')
const UpdateStatus = require('../../controllers/bill/status.controller')
module.exports = app => {
    var router = require('express').Router();

    router.get('/status/:id_khach_hang/:id_hd_dat', getStatusNew.getStatusNew)
        .get('/status', getAllStatus.getAllStatus)
        .get('/status/:id_khach_hang', getStatus.getStatus)
        .post('/status', isAdmin.isAdmin, addStatus.addStatus)
        .post('/status/fillter', isAdmin.isAdmin, getBillByStatus.getBillByStatus)
        .delete('/status/:id_trang_thai', isAdmin.isAdmin, removeStatus.removeStatus)
        .patch('/status', UpdateStatusByIdKhIdHd.UpdateStatusByIdKhIdHd)
        .patch('/status/update', isAdmin.isAdmin, UpdateStatus.UpdateStatus)

    app.use(router);
}