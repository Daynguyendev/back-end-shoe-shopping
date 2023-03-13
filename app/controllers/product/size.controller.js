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
    const id_kich_thuoc = req.params.id_kich_thuoc;

    if (id_kich_thuoc) {

        size.remove(id_kich_thuoc, (err, id_kich_thuoc) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                size: id_kich_thuoc,
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

exports.UpdateTrademark = (req, res) => {
    const data = {
        id_thuong_hieu: req.body.id_thuong_hieu,
        ten_thuong_hieu: req.body.ten_thuong_hieu,
    };

    size.update(data, (err, results) => {
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


exports.getNameSizebyID = (req, res) => {

    const id_sp = req.params.id_sp;

    size.getNameByID(id_sp, (err, result) => {
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