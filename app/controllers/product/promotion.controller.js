const promotion = require('../../models/product/promotion.model')

exports.addPromotion = (req, res) => {
    const { ten_khuyen_mai, ngay_bat_dau, ngay_ket_thuc, phan_tram_giam } = req.body;
    console.log({ ten_khuyen_mai, ngay_bat_dau, ngay_ket_thuc, phan_tram_giam })
    if (ten_khuyen_mai, ngay_bat_dau, ngay_ket_thuc, phan_tram_giam) {
        const newPromotion = new promotion({
            ten_khuyen_mai: ten_khuyen_mai,
            ngay_bat_dau: ngay_bat_dau,
            ngay_ket_thuc: ngay_ket_thuc,
            phan_tram_giam: phan_tram_giam,

        });
        promotion.create(newPromotion, (err, newPromotion) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Ma khuyen mai khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them khuyen mai thanh cong',
                promotion: newPromotion,
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


exports.removePromotion = (req, res) => {
    const id_khuyen_mai = req.params.id_khuyen_mai;
    if (id_khuyen_mai) {

        promotion.remove(id_khuyen_mai, (err, id_khuyen_mai) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                promotion: id_khuyen_mai,
            });
        });


    }
    else {

        return res.status(500).json({
            success: 0,
            data: 'Xoa that bai',
        });




    }

};

exports.addPromotionByCategory = (req, res) => {
    const data = {
        id_loai_sp: req.body.id_loai_sp,
        id_khuyen_mai: req.body.id_khuyen_mai,
    };
    console.log(data);

    if (data.id_loai_sp, data.id_khuyen_mai) {

        promotion.addCategory(data, (err, results) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Them promotion in category',
                data: results,
            });
        });


    }
    else {

        return res.status(404).json({
            success: 0,
            data: 'Xoa that bai',
        });




    }

};

exports.addPromotionByTradeMark = (req, res) => {
    const data = {
        id_thuong_hieu: req.body.id_thuong_hieu,
        id_khuyen_mai: req.body.id_khuyen_mai,
    };

    if (data.id_thuong_hieu, data.id_khuyen_mai) {

        promotion.addTrademark(data, (err, results) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Them promotion in trademark',
                data: results,
            });
        });


    }
    else {

        return res.status(404).json({
            success: 0,
            data: 'Xoa that bai',
        });




    }

};

exports.addPromotionByIdProduct = (req, res) => {
    const data = {
        id_sp: req.body.id_sp,
        id_khuyen_mai: req.body.id_khuyen_mai,
    };

    if (data.id_sp, data.id_khuyen_mai) {

        promotion.addIdProduct(data, (err, results) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Them promotion in idproduct',
                data: results,
            });
        });


    }
    else {

        return res.status(404).json({
            success: 0,
            data: 'Xoa that bai',
        });




    }

};


exports.getAllPromotion = (req, res) => {
    const data = {};


    promotion.getAll(data, (err, data) => {

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

exports.UpdatePromotion = (req, res) => {
    const data = {
        id_khuyen_mai: req.body.id_khuyen_mai,
        ten_khuyen_mai: req.body.ten_khuyen_mai,
        ngay_bat_dau: req.body.ngay_bat_dau,
        ngay_ket_thuc: req.body.ngay_ket_thuc,
        phan_tram_giam: req.body.phan_tram_giam,

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
