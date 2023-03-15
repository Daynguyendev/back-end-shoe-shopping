const getImageByIdProduct = require('../../controllers/product/image.controller')
const addImage = require('../../controllers/product/image.controller')
const removeImage = require('../../controllers/product/image.controller')
const getItemByID = require('../../controllers/product/image.controller')
const getAllImage = require('../../controllers/product/image.controller')
const UpdateImage = require('../../controllers/product/image.controller')
const isAdmin = require('../../middlewares/auth.middleware')

module.exports = app => {
    var router = require('express').Router();
    router.get('/image', getAllImage.getAllImage)
        .post('/image/detail/:id_sp', getImageByIdProduct.getImageByIdProduct)
        .post('/image', isAdmin.isAdmin, addImage.addImage)
        .patch('/image', isAdmin.isAdmin, UpdateImage.UpdateImage)

        .delete('/image/:id_anh', isAdmin.isAdmin, removeImage.removeImage)
    app.use(router);
}
