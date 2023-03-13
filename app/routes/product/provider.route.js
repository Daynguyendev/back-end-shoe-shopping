const addProvider = require('../../controllers/product/provider.controller')
const removeProvider = require('../../controllers/product/provider.controller')
const getAllProvider = require('../../controllers/product/provider.controller')


module.exports = app => {
    var router = require('express').Router();
    router.get('/provider', getAllProvider.getAllProvider)
        .post('/provider', addProvider.addProvider)
        .delete('/provider', removeProvider.removeProvider)
    app.use(router);
}
