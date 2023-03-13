const getImageByIdProduct = require('../../controllers/product/image.controller')
const addImage = require('../../controllers/product/image.controller')
const removeImage = require('../../controllers/product/image.controller')
const getItemByID = require('../../controllers/product/image.controller')
const getAllImage = require('../../controllers/product/image.controller')

module.exports = app => {
    var router = require('express').Router();
    router.get('/image', getAllImage.getAllImage)
        .post('/image/detail/:id_sp', getImageByIdProduct.getImageByIdProduct)
        .post('/image', addImage.addImage)
        .delete('/image/:id', removeImage.removeImage)
    app.use(router);
}
