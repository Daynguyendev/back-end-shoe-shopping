const size = require('../../models/product/size.model')


exports.addSize = (req, res) => {
    const { ten_kich_thuoc } = req.body;

    if (ten_kich_thuoc) {
        const newSize = new size({
            ten_kich_thuoc: ten_kich_thuoc,

        });
        size.create(newSize, (err, newSize) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Kich thuoc khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them kich thuoc thanh cong',
                size: newSize,
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


exports.removeSize = (req, res) => {
    const ten_kich_thuoc = req.body;

    if (ten_kich_thuoc) {

        size.remove(ten_kich_thuoc, (err, ten_kich_thuoc) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                size: ten_kich_thuoc,
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
exports.getAllSize = (req, res) => {

    const data = {};

    size.get(data, (err, data) => {
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
