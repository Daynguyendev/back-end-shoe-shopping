const UpdateStatusByIdKhIdHd = require('../../controllers/bill/status.controller')

module.exports = app => {
    var router = require('express').Router();

    router.post('/statuscheckout', addStatus.addStatus)

        .patch('/statuscheckout', UpdateStatus.UpdateStatus)

    app.use(router);
}