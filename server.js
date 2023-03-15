const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
require('dotenv/config');
const sizeRoute = require('./app/routes/product/size.route')
const colorRoute = require('./app/routes/product/color.route')
const categoryRoute = require('./app/routes/product/category.route')
const imageRoute = require('./app/routes/product/image.route')
const promotionRoute = require('./app/routes/product/promotion.route');
const providerRoute = require('./app/routes/product/provider.route');
const trademarkRoute = require('./app/routes/product/trademark.route');
const productdetailRoute = require('./app/routes/product/productdetail.route');
const statusRoute = require('./app/routes/bill/status.route');
const rateRoute = require('./app/routes/bill/rate.route');
const productRoute = require('./app/routes/product/product.route');
const addressRoute = require('./app/routes/auth/address.route');
const cartRoute = require('./app/routes/auth/cart.route');
const checkoutRoute = require('./app/routes/bill/checkout.route');
const invoiceRoute = require('./app/routes/invoiceinput/detailinvoice.route');
const detailinvoiceoutputRoute = require('./app/routes/invoiceoutput/detailinvoiceoutput.route');
const invoiceoutputRoute = require('./app/routes/invoiceoutput/invoiceoutput.route');
const invoiceinputRoute = require('./app/routes/invoiceinput/invoiceinput.route')
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Authorization,X-Requested-With,Content-type');
    // Set to true if you need the webysite to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);


    // Pass to next layer of middleware
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.set('views', 'app/views');

app.use(express.static('app/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
}))


app.get('/', (req, res, next) => {
    res.render('index');
})

require('./app/routes/route')(app);
require('./app/routes/product/size.route')(app);
require('./app/routes/product/color.route')(app);
require('./app/routes/product/category.route')(app);
require('./app/routes/product/image.route')(app);
require('./app/routes/product/promotion.route')(app);
require('./app/routes/product/provider.route')(app);
require('./app/routes/product/trademark.route')(app);
require('./app/routes/product/productdetail.route')(app);
require('./app/routes/bill/status.route')(app);
require('./app/routes/bill/rate.route')(app);
require('./app/routes/product/product.route')(app);
require('./app/routes/auth/address.route')(app);
require('./app/routes/auth/cart.route')(app);
require('./app/routes/bill/checkout.route')(app);
require('./app/routes/invoiceinput/invoiceinput.route')(app);
require('./app/routes/invoiceoutput/detailinvoiceoutput.route')(app);
require('./app/routes/invoiceoutput/invoiceoutput.route')(app);
require('./app/routes/invoiceinput/detailinvoice.route')(app);




app.use('/size', sizeRoute);
app.use('/color', colorRoute);
app.use('/category', categoryRoute);
app.use('/image', imageRoute);
app.use('/promotion', promotionRoute);
app.use('/provider', providerRoute);
app.use('/trademark', trademarkRoute);
app.use('/all', productdetailRoute);
app.use('/status', statusRoute);
app.use('/rate', rateRoute);
app.use('/product', productRoute);
app.use('/address', addressRoute);
app.use('/cart', cartRoute);
app.use('/checkout', checkoutRoute);
app.use('/detailinvoice', invoiceRoute);
app.use('/detailinvoiceoutput', detailinvoiceoutputRoute);
app.use('/invoiceoutput', invoiceoutputRoute);
app.use('/invoice', invoiceinputRoute);




















app.listen(5000, function () {
    console.log('server running: http://localhost:5000');
});
