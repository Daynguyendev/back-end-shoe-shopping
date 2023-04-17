const User = require('../../models/auth/user.model');
const bcrypt = require('bcrypt');
const mailer = require('../../utils/mailer');

exports.sendResetLinkEmail = (req, res) => {
    if (!req.body.email_khach_hang) {
        res.render('reset')
    } else {
        User.findByEmail(req.body.email_khach_hang, (err, user) => {
            if (!user) {
                res.render('reset')
            } else {

                mailer.sendMail(user.email_khach_hang, "Reset password", `<a href="${process.env.APP_URL}/reset/${user.email_khach_hang}/${user.token}"> Bấm vào đây để đặt lại mật khẩu </a>`)
                console.log(`${process.env.APP_URL}/reset/${user.email_khach_hang}/${user.token}`);
                return res.json({
                    success: 'thanh cong'
                })
            }
        })
    }
}

exports.showResetForm = (req, res) => {
    if (!req.params.email_khach_hang || !req.query.token) {
        res.render('reset')
    } else {
        res.render('auth/passwords/reset', { email_khach_hang: req.params.email_khach_hang, token: req.query.token })
    }
}

exports.reset = (req, res) => {
    const { email_khach_hang, token, password } = req.body;
    console.log(email_khach_hang, token, password);
    if (!email_khach_hang || !token || !password) {
        res.render('reset');
    } else {
        bcrypt.compare(email_khach_hang, token, (err, result) => {
            console.log('compare', result);
            if (result == true) {
                bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedPassword) => {
                    User.resetPassword(email_khach_hang, hashedPassword, (err, result) => {
                        if (!err) {
                            res.redirect('/login');
                        } else {
                            res.redirect("/500");
                        }
                    })
                })
            } else {
                res.redirect('/password/reset');
            }
        })
    }
}
