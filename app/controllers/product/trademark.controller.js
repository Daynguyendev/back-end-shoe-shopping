const trademark = require('../../models/product/trademark.model')

exports.addTrademark = (req, res) => {
    const { ten_thuong_hieu } = req.body;

    if (ten_thuong_hieu) {
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
    else {

        return res.status(400).json({
            success: 0,
            data: 'Vui long nhap day du thong tin',
        });




    }

};


exports.removeTrademark = (req, res) => {
    const ten_thuong_hieu = req.body;

    if (ten_thuong_hieu) {

        trademark.remove(ten_thuong_hieu, (err, ten_thuong_hieu) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                trademark: ten_thuong_hieu,
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