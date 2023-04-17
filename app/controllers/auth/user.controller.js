const khach_hang = require('../../models/auth/user.model');
const bcrypt = require('bcrypt');

exports.getIDByNameUser = (req, res) => {
    const data = req.body;
    khach_hang.getIdbyEmail(data, (err, result) => {
        if (err) {
            return res.status(400).json({
                success: 0,

            });


        }
        return res.status(200).json({
            data: result,
        });
    });

};


exports.ChangePassword = (req, res) => {
    const { email_khach_hang, mat_khau_khach_hang, mat_khau_moi } = req.body;

    if (email_khach_hang && mat_khau_khach_hang && mat_khau_moi) {
        khach_hang.findByEmail(email_khach_hang, (err, user) => {
            if (!user) {
                return res.status(400).json({
                    success: 0,
                    data: 'Khong tim thay email',
                });
            } else {
                bcrypt.compare(mat_khau_khach_hang, user.mat_khau_khach_hang, (err, result) => {
                    if (result) {
                        bcrypt.hash(mat_khau_moi, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashed) => {
                            // Create a User
                            const newPass = hashed;
                            console.log(newPass);
                            khach_hang.updatePassword(newPass, email_khach_hang, (err, result) => {
                                if (err) {
                                    return res.status(400).json({
                                        success: 0,
                                        data: 'Doi mat khau that bai',
                                    });
                                }
                                return res.json({
                                    success: 1,
                                    message: 'Doi mat khau thanh cong',
                                });
                            })
                        })

                    } else {
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



exports.ForgotPasswords = (req, res) => {

    const email_khach_hang = req.body.email_khach_hang;
    const token = req.body.token;
    const mat_khau_moi = req.body.mat_khau_moi;
    if (email_khach_hang && token && mat_khau_moi) {
        khach_hang.findByEmail(email_khach_hang, (err, user) => {
            if (!user) {
                return res.status(400).json({
                    success: 0,
                    data: 'Khong tim thay email',
                });
            } else {
                if (token === user.token) {
                    bcrypt.hash(mat_khau_moi, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashed) => {
                        // Create a User
                        const newPass = hashed;
                        khach_hang.updatePassword(newPass, email_khach_hang, (err, result) => {
                            if (err) {
                                return res.status(400).json({
                                    success: 0,
                                    data: 'Doi mat khau that bai',
                                });
                            }
                            return res.json({
                                success: 1,
                                message: 'Doi mat khau thanh cong',
                            });
                        })
                    })

                } else {
                    return res.status(400).json({
                        success: 0,
                        data: 'mat khau khong chinh xac',
                    });
                }

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



exports.removeCustomer = (req, res) => {
    const id_khach_hang = req.params.id_khach_hang;

    if (id_khach_hang) {

        khach_hang.remove(id_khach_hang, (err, id_khach_hang) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                rate: id_khach_hang,
            });
        });


    }
    else {

        return res.status(400).json({
            success: 0,
            data: 'Xoa that bai',
        });




    }

};

exports.UpdateCustomer = (req, res) => {
    const data = {
        chuc_vu: req.body.chuc_vu,
        id_khach_hang: req.body.id_khach_hang,
    };

    khach_hang.update(data, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }

        if (!results) {
            return res.status(404).json({
                success: 0,
                message: 'Cap nhat that bai',
            });
        } else {
            return res.json({
                success: 1,
                message: 'Cap nhat thanh cong',
            });
        }
    });
};


exports.getAllCustomer = (req, res) => {


    const data = {};

    khach_hang.getAll(data, (err, data) => {
        if (err) {
            return res.status(400).json({
                success: 0,

            });


        }
        return res.status(200).json({
            data,
        });
    });

};


exports.getAllStatistical = (req, res) => {
    const data = {};

    khach_hang.getStatis(data, (err, data) => {
        if (err) {
            return res.status(400).json({
                success: 0,

            });


        }
        return res.status(200).json({
            data,
        });
    });

};

exports.getBestsaler = (req, res) => {
    const data = {};

    khach_hang.getBestsaler(data, (err, data) => {
        if (err) {
            return res.status(400).json({
                success: 0,

            });


        }
        return res.status(200).json({
            data,
        });
    });

};



