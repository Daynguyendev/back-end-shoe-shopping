const getAllRate = require('../../controllers/bill/rate.controller')
const UpdateRate = require('../../controllers/bill/rate.controller')
const addRate = require('../../controllers/bill/rate.controller')
const removeRate = require('../../controllers/bill/rate.controller')

module.exports = app => {
    var router = require('express').Router();
    router.get('/rate/:id_sp', getAllRate.getAllRate)
        .patch('/rate', UpdateRate.UpdateRate)
        .post('/rate', addRate.addRate)
        .delete('/rate', removeRate.removeRate)
    app.use(router);
}