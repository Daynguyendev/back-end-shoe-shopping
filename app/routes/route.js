module.exports = app => {
    require('./auth.route')(app);
    require('./web.route')(app);
}