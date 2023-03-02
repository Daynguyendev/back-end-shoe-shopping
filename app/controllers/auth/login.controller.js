const khach_hang = require('../../models/auth/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.showLoginForm = (req, res) => {
    res.render('auth/login');
}

exports.login = (req, res) => {
    const { email_khach_hang, mat_khau_khach_hang } = req.body;

    if (email_khach_hang && mat_khau_khach_hang) {
        khach_hang.findByEmail(email_khach_hang, (err, user) => {
            if (!user) {
                return res.status(400).json({
                    success: 0,
                    data: 'Khong tim thay email',
                });
            } else {
                bcrypt.compare(mat_khau_khach_hang, user.mat_khau_khach_hang, (err, result) => {
                    if (result) {
                        const token = jwt.sign({ email: user.email }, 'mysecretkey', { expiresIn: '1h' }); // Tạo JWT token
                        khach_hang.updateToken(token, email_khach_hang, (err, result) => {
                            if (err) {
                                return res.status(400).json({
                                    success: 0,
                                    data: 'Them token that bai',
                                });
                            }
                        })
                        return res.json({
                            success: 1,
                            message: 'Dang nhap thanh cong',
                            user: result,
                            token: token // Trả về JWT token trong response
                        });




                    } else {
                        // A user with that email address does not exists
                        return res.status(400).json({
                            success: 0,
                            data: 'mat khau khong chinh xac',
                        });
                    }
                })
            }
        })
    } else {
        // A user with that email address does not exists
        return res.status(400).json({
            success: 0,
            data: 'Vui long nhap email va password',
        });
    }
}

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) res.redirect('/500');
        res.redirect('/');
    })
}

