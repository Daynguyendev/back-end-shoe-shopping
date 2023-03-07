const product = require('../../models/product/product.model')

exports.addProduct = (req, res) => {
    const { ten_sp, gia_sp, thong_tin_sp, id_hinh_anh, id_thuong_hieu, id_loai_sp, hinh_anh_chinh } = req.body;

    if (ten_sp, gia_sp, thong_tin_sp, id_hinh_anh, id_thuong_hieu, id_loai_sp, hinh_anh_chinh) {
        const newProduct = new product({
            ten_sp: ten_sp,
            gia_sp: gia_sp,
            thong_tin_sp: thong_tin_sp,
            id_hinh_anh: id_hinh_anh,
            id_thuong_hieu: id_thuong_hieu,
            id_loai_sp: id_loai_sp,
            hinh_anh_chinh: hinh_anh_chinh,

        });
        product.create(newProduct, (err, newProduct) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'San pham khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them San pham thanh cong',
                product: newProduct,
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




exports.removeProduct = (req, res) => {
    const id_sp = req.body;

    if (id_sp) {

        product.remove(id_sp, (err, id_sp) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                product: id_sp,
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

exports.getAllItemProduct = (req, res) => {

    const data = {};

    product.get(data, (err, data) => {
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

exports.getItemByIDImage = (req, res) => {

    const id_hinh_anh = req.params.id;

    product.getByIDImage(id_hinh_anh, (err, result) => {
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

exports.getItemByIDItem = (req, res) => {

    const id_sp = req.body;
    console.log('id_sp', id_sp);
    product.getSpByID(id_sp, (err, result) => {
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


exports.getItemByName = (req, res) => {

    const ten_thuong_hieu = req.params.ten_thuong_hieu;
    console.log(ten_thuong_hieu)
    product.getByNameTradeMark(ten_thuong_hieu, (err, result) => {
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

exports.UpdatePromotion = (req, res) => {
    const data = {
        id_sp: req.body.id_sp,
        ten_sp: req.body.ten_sp,
        gia_sp: req.body.gia_sp,
        thong_tin_sp: req.body.thong_tin_sp,
        id_hinh_anh: req.body.id_hinh_anh,
        id_thuong_hieu: req.body.id_thuong_hieu,
        id_loai_sp: req.body.id_loai_sp,
        hinh_anh_chinh: req.body.hinh_anh_chinh,


    };

    promotion.update(data, (err, results) => {
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


