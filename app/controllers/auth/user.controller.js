const khach_hang = require('../../models/auth/user.model');
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



