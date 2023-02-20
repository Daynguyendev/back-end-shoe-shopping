const color = require('../../models/product/color.model')


exports.addColor = (req, res) => {
    const { ten_mau_sac } = req.body;

    if (ten_mau_sac) {
        const newColor = new color({
            ten_mau_sac: ten_mau_sac,

        });
        color.create(newColor, (err, newColor) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Mau khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them mau thanh cong',
                color: newColor,
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


exports.removeColor = (req, res) => {
    const id_mau_sac = req.body;

    if (id_mau_sac) {

        color.remove(id_mau_sac, (err, id_mau_sac) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                color: id_mau_sac,
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

exports.getAllColor = (req, res) => {

    const data = {};

    color.get(data, (err, data) => {
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