const image = require('../../models/product/image.model')

exports.addImage = (req, res) => {
    const { link_hinh_anh_ct, id_sp, id_mau_sac } = req.body;

    if (link_hinh_anh_ct, id_sp, id_mau_sac) {
        const newImage = new image({
            id_mau_sac: id_mau_sac,
            link_hinh_anh_ct: link_hinh_anh_ct,
            id_sp: id_sp,

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
    const id_anh = req.params.id_anh;

    if (id_anh) {

        image.remove(id_anh, (err, id_anh) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                image: id_anh,
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

    const id_sp = req.params.id;
    const id_mau_sac = req.params.id;


    image.getByIDSPIdColor(id_sp, id_mau_sac, (err, result) => {
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


exports.getImageByIdProduct = (req, res) => {
    const id_sp = req.params.id_sp;
    console.log('getImageByIdProduct', id_sp);
    image.getImageById(id_sp, (err, result) => {
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

exports.getColorByIdProduct = (req, res) => {
    const id_sp = req.params.id_sp;
    console.log('getColorByIdProduct', id_sp);
    image.getColorById(id_sp, (err, result) => {
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



exports.getAllImage = (req, res) => {
    const data = {};

    image.get(data, (err, data) => {

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



exports.UpdateImage = (req, res) => {
    const data = {
        id_anh: req.body.id_anh,
        id_sp: req.body.id_sp,
        id_mau_sac: req.body.id_mau_sac,
        link_hinh_anh_ct: req.body.link_hinh_anh_ct

    };

    image.update(data, (err, results) => {
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
