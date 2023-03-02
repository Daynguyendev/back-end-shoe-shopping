const discount = require('../../models/product/discount.model')


exports.addDiscount = (req, res) => {
    const { ten_giam_gia, gia_giam } = req.body;

    if (ten_giam_gia, gia_giam) {
        const newDiscount = new discount({
            ten_giam_gia: ten_giam_gia,
            gia_giam: gia_giam,

        });
        discount.create(newDiscount, (err, newDiscount) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Ma giam gia khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them ma giam gia thanh cong',
                discount: newDiscount,
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


exports.removeDiscount = (req, res) => {
    const id_giam_gia = req.body;

    if (id_giam_gia) {

        discount.remove(id_giam_gia, (err, id_giam_gia) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                discount: id_giam_gia,
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

exports.getAllDiscount = (req, res) => {
    const data = {};


    discount.getAll(data, (err, data) => {

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



exports.UpdateDisCount = (req, res) => {
    const data = {
        id_giam_gia: req.body.id_giam_gia,
        ten_giam_gia: req.body.ten_giam_gia,
        gia_giam: req.body.gia_giam,
    };
    console.log('hehae', data);

    discount.update(data, (err, results) => {
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
