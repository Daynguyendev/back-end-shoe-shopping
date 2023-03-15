const getNameSizebyID = require('../../controllers/product/size.controller')
const getAllSize = require('../../controllers/product/size.controller')
const addSize = require('../../controllers/product/size.controller')
const removeSize = require('../../controllers/product/size.controller')
const UpdateSize = require('../../controllers/product/size.controller')
const isAdmin = require('../../middlewares/auth.middleware')

module.exports = app => {
    var router = require('express').Router();

    router.get('/size/:id_sp', getNameSizebyID.getNameSizebyID)
        .get('/size', getAllSize.getAllSize)
        .post('/size', isAdmin.isAdmin, addSize.addSize)
        .delete('/size/:id_kich_thuoc', isAdmin.isAdmin, removeSize.removeSize)
        .patch('/size', isAdmin.isAdmin, UpdateSize.UpdateSize)
    app.use(router);
}