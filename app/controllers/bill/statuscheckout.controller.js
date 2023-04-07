const statuscheckout = require('../../models/bill/statuscheckout.model')

exports.addstatuscheckout = (req, res) => {
    const { id_hd_dat, ten_trang_thai, ten_thanh_toan } = req.body;

    if (id_hd_dat && ten_trang_thai && ten_thanh_toan) {
        const newstatuscheckout = new statuscheckout({
            ten_trang_thai: ten_trang_thai,

        });
        statuscheckout.create(newstatuscheckout, (err, newstatuscheckout) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Trang thai khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them trang thai thanh toan thanh cong',
                status: newstatuscheckout,
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




exports.Updatestatuscheckout = (req, res) => {
    const data = {
        id_hd_dat: req.body.id_hd_dat,
        ten_trang_thai: req.body.ten_trang_thai,
        ten_thanh_toan: req.body.ten_thanh_toan,

    };

    statuscheckout.update(data, (err, results) => {
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