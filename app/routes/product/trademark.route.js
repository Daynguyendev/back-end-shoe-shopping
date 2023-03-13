
const getAlltrademark = require('../../controllers/product/trademark.controller')
const addTrademark = require('../../controllers/product/trademark.controller')
const removeTrademark = require('../../controllers/product/trademark.controller')


module.exports = app => {
    var router = require('express').Router();
    router.get('/trademark', getAlltrademark.getAlltrademark)
        .post('/trademark', addTrademark.addTrademark)
        .delete('/trademark', removeTrademark.removeTrademark)

    app.use(router);
}
