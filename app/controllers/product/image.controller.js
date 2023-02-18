const image = require('../../models/product/image.model')

exports.addImage = (req, res) => {
    const { link_hinh_anh_ct, id_hinh_anh_ct } = req.body;

    if (link_hinh_anh) {
        const newImage = new image({
            link_hinh_anh_ct: link_hinh_anh_ct,
            id_hinh_anh_ct: id_hinh_anh_ct,

        });
        image.create(newImage, (err, newImage) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'hinh anh khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them hinh anh thanh cong',
                image: newImage,
            });
        });


    }
    else {

        return res.status(400).json({
            success: 0,
            data: 'Vui long nhap day du',
        });




    }

};


exports.removeImage = (req, res) => {
    const id_hinh_anh_ct = req.body;

    if (id_hinh_anh_ct) {

        image.remove(id_hinh_anh_ct, (err, id_hinh_anh_ct) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                image: id_hinh_anh_ct,
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

exports.getItemByID = (req, res) => {

    const id_hinh_anh_ct = req.params.id;

    image.getByID(id_hinh_anh_ct, (err, result) => {
        if (err) {
            return res.status(400).json({
                success: 0,

            });


        }
        return res.json({
            data: result,
        });
    });

};
