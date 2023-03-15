const addPromotionByCategory = require('../../controllers/product/promotion.controller')
const addPromotionByTradeMark = require('../../controllers/product/promotion.controller')
const addPromotionByIdProduct = require('../../controllers/product/promotion.controller')
const addPromotion = require('../../controllers/product/promotion.controller')
const removePromotion = require('../../controllers/product/promotion.controller')
const UpdatePromotion = require('../../controllers/product/promotion.controller')
const getAllPromotion = require('../../controllers/product/promotion.controller')
const isAdmin = require('../../middlewares/auth.middleware')

module.exports = app => {
    var router = require('express').Router();

    router.get('/promotion/all', isAdmin.isAdmin, getAllPromotion.getAllPromotion)
        // .post('/promotion/category', addPromotionByCategory.addPromotionByCategory)
        // .post('/promotion/id', addPromotionByIdProduct.addPromotionByIdProduct)
        // .post('/promotion/trademark', addPromotionByTradeMark.addPromotionByTradeMark)

        .patch('/promotion', isAdmin.isAdmin, UpdatePromotion.UpdatePromotion)

        .post('/promotion/add', isAdmin.isAdmin, addPromotion.addPromotion)
        .delete('/promotion/:id_khuyen_mai', isAdmin.isAdmin, removePromotion.removePromotion)

    app.use(router);
}
