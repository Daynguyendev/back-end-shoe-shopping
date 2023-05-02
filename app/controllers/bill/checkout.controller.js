const checkout = require('../../models/bill/checkout.model')

exports.addCheckout = (req, res) => {
    const { ten_phuong_thuc_tt } = req.body;

    if (ten_phuong_thuc_tt) {
        checkout.findCheckout(ten_phuong_thuc_tt, (err, newColor) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'thanh toan khong hop le',
                })
            }
            if (newColor) {
                return res.status(400).json({
                    success: 0,
                    message: 'thanh toan da ton tai',
                });
            }
            else {
                const newCheckout = new checkout({
                    ten_phuong_thuc_tt: ten_phuong_thuc_tt,
                });
                checkout.create(newCheckout, (err, newCheckout) => {
                    if (err) {
                        return res.status(400).json({
                            success: 0,
                            data: 'Phuong thuc thanh toan khong hop le',
                        });
                    }
                    return res.json({
                        success: 1,
                        message: 'Them Phuong thuc thanh toan thanh cong',
                        checkout: newCheckout,
                    });
                });
            }
        })
    }
    else {
        return res.status(400).json({
            success: 0,
            data: 'Vui long nhap day du thong tin',
        });
    }
};


exports.removeCheckout = (req, res) => {
    const id_phuong_thuc_tt = req.params.id_phuong_thuc_tt;

    if (id_phuong_thuc_tt) {

        checkout.remove(id_phuong_thuc_tt, (err, id_phuong_thuc_tt) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                checkout: id_phuong_thuc_tt,
            });
        });


    }
    else {

        return res.status(500).json({
            success: 0,
            data: 'Xoa that bai',
        });




    }

};

exports.getAllCheckout = (req, res) => {
    const data = {};


    checkout.getAll(data, (err, data) => {

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

exports.UpdateCheckout = (req, res) => {
    const data = {
        id_phuong_thuc_tt: req.body.id_phuong_thuc_tt,
        ten_phuong_thuc_tt: req.body.ten_phuong_thuc_tt,
    };

    checkout.update(data, (err, results) => {
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
