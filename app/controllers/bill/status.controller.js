const status = require('../../models/bill/status.model')

exports.addStatus = (req, res) => {
    const { ten_trang_thai } = req.body;

    if (ten_trang_thai) {
        const newStatus = new status({
            ten_trang_thai: ten_trang_thai,

        });
        status.create(newStatus, (err, newStatus) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Trang thai khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them trang thai thanh cong',
                status: newStatus,
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


exports.removeStatus = (req, res) => {
    const id_trang_thai = req.body;

    if (id_trang_thai) {

        status.remove(id_trang_thai, (err, id_trang_thai) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                status: id_trang_thai,
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