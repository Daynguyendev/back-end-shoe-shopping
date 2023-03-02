const jwt = require('jsonwebtoken');

exports.loggedin = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]; // Lấy token từ header Authorization
    jwt.verify(token, 'mysecretkey', (err, decoded) => { // Giải mã và xác thực token
        if (err) {
            return res.status(401).json({
                success: 0,
                message: 'Access Denied! Unauthorized User',
            });
        } else {
            req.user = decoded; // Lưu thông tin người dùng vào biến req.user để sử dụng ở các middleware hoặc route khác
            next();
        }
    });
}

exports.isAuth = (req, res, next) => {
    if (req.session.loggedin) {
        res.locals.user = req.session.user
        res.redirect('/home');
    } else {
        next();
    }
}
