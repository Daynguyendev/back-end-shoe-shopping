const khach_hang = require('../../models/auth/user.model');
const bcrypt = require('bcrypt');
require('dotenv/config');
const mailer = require('../../utils/mailer');
exports.create = (req, res) => {
    res.render('auth/register');
}

exports.register = (req, res) => {
    const { ten_khach_hang, email_khach_hang, mat_khau_khach_hang, ngay_sinh_khach_hang, chuc_vu } = req.body;

    if (email_khach_hang && mat_khau_khach_hang) {
        khach_hang.findByEmail(email_khach_hang, (err, user) => {
            if (err || user) {
                return res.status(400).json({
                    success: 0,
                    message: 'Dia chi email da ton tai',
                });
            }
        })

        bcrypt.hash(mat_khau_khach_hang, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashed) => {
            // Create a User
            const user = new khach_hang({
                ten_khach_hang: ten_khach_hang,
                email_khach_hang: email_khach_hang,

                ngay_sinh_khach_hang: ngay_sinh_khach_hang,
                chuc_vu: chuc_vu,
                mat_khau_khach_hang: hashed


            });
            khach_hang.create(user, (err, user) => {
                if (!err) {
                    bcrypt.hash(user.email_khach_hang, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedEmail) => {
                        console.log(`${process.env.APP_URL}/verify?email=${user.email_khach_hang}&token=${hashedEmail}`);
                        mailer.sendMail(user.email_khach_hang, "Verify Email", `<a href="${process.env.APP_URL}/verify?email=${user.email_khach_hang}&token=${hashedEmail}"> Tài khoản đã được tạo thành công vui lòng bấm vào đây để xác nhận  </a>`)
                    });

                    return res.json({
                        success: 1,
                        message: 'Dang ky thanh cong',
                        users: user,
                    });
                }
            })
        });
    } else {
        return res.status(400).json({
            success: 0,
            data: 'Vui long nhap dia chi email hoac mat khau',
        });
    }
}

exports.verify = (req, res) => {
    bcrypt.compare(req.query.email_khach_hang, req.query.token, (err, result) => {
        if (result == true) {
            khach_hang.verify(req.query.email_khach_hang, (err, result) => {
                if (!err) {
                    res.redirect('/login');
                } else {
                    res.redirect('/500');
                }
            });
        } else {
            res.redirect('/404');
        }
    })
}