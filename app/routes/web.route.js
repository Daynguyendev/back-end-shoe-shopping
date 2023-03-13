const authMiddleware = require('../middlewares/auth.middleware');
// import sizeRoute from './product/size.route';
module.exports = app => {
    const router = require('express').Router();

    router.get('/home', authMiddleware.loggedin, (req, res) => {
        res.render('home');
    });

    app.use(router);
}