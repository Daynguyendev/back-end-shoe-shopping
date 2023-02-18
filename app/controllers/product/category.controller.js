const category = require('../../models/product/category.model')

exports.addCategory = (req, res) => {
    const { ten_loai_sp } = req.body;

    if (ten_loai_sp) {
        const newCategory = new category({
            ten_loai_sp: ten_loai_sp,

        });
        category.create(newCategory, (err, newCategory) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Thuong hieu khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them thuong hieu thanh cong',
                category: newCategory,
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


exports.removeCategory = (req, res) => {
    const id_loai_sp = req.body;

    if (id_loai_sp) {

        category.remove(id_loai_sp, (err, id_loai_sp) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                category: id_loai_sp,
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