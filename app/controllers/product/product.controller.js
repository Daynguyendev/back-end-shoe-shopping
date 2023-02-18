const product = require('../../models/product/product.model')

exports.addProduct = (req, res) => {
    const { ten_sp, gia_sp, thong_tin_sp, id_hinh_anh, id_thuong_hieu, id_giam_gia, id_loai_sp, hinh_anh_chinh } = req.body;

    if (ten_sp, gia_sp, thong_tin_sp, id_hinh_anh, id_thuong_hieu, id_giam_gia, id_loai_sp, hinh_anh_chinh) {
        const newProduct = new product({
            ten_sp: ten_sp,
            gia_sp: gia_sp,
            thong_tin_sp: thong_tin_sp,
            id_hinh_anh: id_hinh_anh,
            id_thuong_hieu: id_thuong_hieu,
            id_giam_gia: id_giam_gia,
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
