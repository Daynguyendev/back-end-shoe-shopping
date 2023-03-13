const addPromotionByCategory = require('../../controllers/product/promotion.controller')
const addPromotionByTradeMark = require('../../controllers/product/promotion.controller')
const addPromotionByIdProduct = require('../../controllers/product/promotion.controller')
const addPromotion = require('../../controllers/product/promotion.controller')
const removePromotion = require('../../controllers/product/promotion.controller')
const UpdatePromotion = require('../../controllers/product/promotion.controller')
const getAllPromotion = require('../../controllers/product/promotion.controller')

module.exports = app => {
    var router = require('express').Router();

    router.get('/promotion/all', getAllPromotion.getAllPromotion)
        .post('/promotion/category', addPromotionByCategory.addPromotionByCategory)
        .post('/promotion/id', addPromotionByIdProduct.addPromotionByIdProduct)
        .post('/promotion/trademark', addPromotionByTradeMark.addPromotionByTradeMark)

        .patch('/promotion/update', UpdatePromotion.UpdatePromotion)

        .post('/promotion/add', addPromotion.addPromotion)
        .delete('/promotion/delete', removePromotion.removePromotion)

    app.use(router);
}
