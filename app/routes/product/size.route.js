const getNameSizebyID = require('../../controllers/product/size.controller')
const getAllSize = require('../../controllers/product/size.controller')
const addSize = require('../../controllers/product/size.controller')
const removeSize = require('../../controllers/product/size.controller')
module.exports = app => {
    var router = require('express').Router();

    router.get('/size/:id_sp', getNameSizebyID.getNameSizebyID)
        .get('/size', getAllSize.getAllSize)
        .post('/size', addSize.addSize)
        .delete('/size/:id_kich_thuoc', removeSize.removeSize)
    app.use(router);
}