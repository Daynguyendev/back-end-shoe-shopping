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
    const id_loai_sp = req.params.id_loai_sp;
    console.log('test id', id_loai_sp);
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

exports.getAllCategory = (req, res) => {

    const data = {};

    category.get(data, (err, data) => {
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

exports.UpdateCategory = (req, res) => {
    const data = {
        id_loai_sp: req.body.id_loai_sp,
        ten_loai_sp: req.body.ten_loai_sp,
    };

    category.update(data, (err, results) => {
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
