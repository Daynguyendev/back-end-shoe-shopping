const rate = require('../../models/bill/rate.model')

exports.addRate = (req, res) => {
    const { id_hd_dat, noi_dung, id_mau_sac, id_kich_thuoc, id_sp, hinh_anh_danh_gia, so_sao_danh_gia } = req.body;

    if (id_hd_dat, noi_dung, id_mau_sac, id_kich_thuoc, id_sp, hinh_anh_danh_gia, so_sao_danh_gia) {
        const newRate = new rate({
            id_hd_dat: id_hd_dat,
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