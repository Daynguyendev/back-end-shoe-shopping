const rate = require('../../models/bill/rate.model')

exports.addRate = (req, res) => {
    const { id_khach_hang, id_hd_dat, noi_dung, id_sp, hinh_anh_danh_gia, so_sao_danh_gia } = req.body;

    if (id_khach_hang, noi_dung, id_hd_dat, id_sp, hinh_anh_danh_gia, so_sao_danh_gia) {
        const newRate = new rate({
            id_khach_hang: id_khach_hang,
            id_hd_dat: id_hd_dat,
            noi_dung: noi_dung,
            id_sp: id_sp,
            so_sao_danh_gia: so_sao_danh_gia,
            hinh_anh_danh_gia: hinh_anh_danh_gia,
        });
        rate.create(newRate, (err, results) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Danh gia khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them danh gia thanh cong',
                data: results.insertId,
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
        id_khach_hang: req.body.id_khach_hang,
        id_danh_gia: req.body.id_danh_gia,
        id_hd_dat: req.body.id_hd_dat,
        noi_dung: req.body.noi_dung,
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

exports.getAllRate = (req, res) => {

    const id_sp = req.params.id_sp;
    console.log('id sp control', id_sp);

    rate.getAll(id_sp, (err, data) => {
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

