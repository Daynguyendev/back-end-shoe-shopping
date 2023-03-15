const addDiachi = require('../../controllers/auth/address.controller')
const GetAddressById = require('../../controllers/auth/address.controller')
const removeDiachi = require('../../controllers/auth/address.controller')
const UpdateAddress = require('../../controllers/auth/address.controller')
module.exports = app => {
    var router = require('express').Router();

    router.post('/account', addDiachi.addDiachi)
        .post('/account/delete/:id', removeDiachi.removeDiachi)
        .post('/account/address', GetAddressById.GetAddressById)
        .delete('/account/:id_dia_chi', removeDiachi.removeDiachi)
        .patch('/account', UpdateAddress.UpdateAddress)


    app.use(router);
}
