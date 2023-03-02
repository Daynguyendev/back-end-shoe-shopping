const rate = require('../../models/bill/rate.model')

exports.addRate = (req, res) => {
    const { noi_dung, id_mau_sac, id_kich_thuoc, id_sp, hinh_anh_danh_gia, so_sao_danh_gia } = req.body;

    if (noi_dung, id_mau_sac, id_kich_thuoc, id_sp, hinh_anh_danh_gia, so_sao_danh_gia) {
        const newRate = new rate({
            noi_dung: noi_dung,
            id_mau_sac: id_mau_sac,
            id_kich_thuoc: id_kich_thuoc,
            id_sp: id_sp,
            so_sao_danh_gia: so_sao_danh_gia,
            hinh_anh_danh_gia: hinh_anh_danh_gia,
        });
        rate.create(newRate, (err, newRate) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Danh gia khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them danh gia thanh cong',
                rate: newRate,
            });
        });


    }
    else {

        return res.status(400).json({
            success: 0,
            data: 'Vui long nhap day du thong tin danh gia',
        });




    }

};


exports.removeRate = (req, res) => {
    const id_danh_gia = req.body;

    if (id_danh_gia) {

        rate.remove(id_danh_gia, (err, id_danh_gia) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                rate: id_danh_gia,
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

exports.UpdateRate = (req, res) => {
    const data = {
        id_danh_gia: req.body.id_danh_gia,
        noi_dung: req.body.noi_dung,
        id_mau_sac: req.body.id_mau_sac,
        id_kich_thuoc: req.body.id_kich_thuoc,
        id_sp: req.body.id_sp,
        so_sao_danh_gia: req.body.so_sao_danh_gia,
        hinh_anh_danh_gia: req.body.hinh_anh_danh_gia,

    };

    rate.update(data, (err, results) => {
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
