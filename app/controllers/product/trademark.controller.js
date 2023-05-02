const trademark = require('../../models/product/trademark.model')

exports.addTrademark = (req, res) => {
    const { ten_thuong_hieu } = req.body;

    if (ten_thuong_hieu) {
        trademark.findTrademark(ten_thuong_hieu, (err, newColor) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Kich thuoc khong hop le',
                })
            }
            if (newColor) {
                return res.status(400).json({
                    success: 0,
                    message: 'Kich thuoc da ton tai',
                });
            }
            else {
                const newTrademark = new trademark({
                    ten_thuong_hieu: ten_thuong_hieu,

                });
                trademark.create(newTrademark, (err, newTrademark) => {
                    if (err) {
                        return res.status(400).json({
                            success: 0,
                            data: 'Thuong hieu khong hop le',
                        });


                    }
                    return res.json({
                        success: 1,
                        message: 'Them thuong hieu thanh cong',
                        trademark: newTrademark,
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


exports.removeTrademark = (req, res) => {
    const id_thuong_hieu = req.params.id_thuong_hieu;

    if (id_thuong_hieu) {

        trademark.remove(id_thuong_hieu, (err, id_thuong_hieu) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });
            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                trademark: id_thuong_hieu,
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

exports.getAlltrademark = (req, res) => {

    const data = {};

    trademark.get(data, (err, data) => {
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


exports.UpdateTrademark = (req, res) => {
    const data = {
        id_thuong_hieu: req.body.id_thuong_hieu,
        ten_thuong_hieu: req.body.ten_thuong_hieu,
    };

    trademark.update(data, (err, results) => {
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
