const status = require('../../models/bill/status.model')

exports.addStatus = (req, res) => {
    const { ten_trang_thai } = req.body;

    if (ten_trang_thai) {
        status.findStatus(ten_trang_thai, (err, newColor) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'trang thai khong hop le',
                })
            }
            if (newColor) {
                return res.status(400).json({
                    success: 0,
                    message: 'trang thai da ton tai',
                });
            }
            else {
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
        })
    }
    else {

        return res.status(400).json({
            success: 0,
            data: 'Vui long nhap day du thong tin',
        });
    }

};


exports.removeStatus = (req, res) => {
    const id_trang_thai = req.params.id_trang_thai;

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

exports.getStatus = (req, res) => {

    const id_khach_hang = req.params.id_khach_hang;

    status.getStatusByBillOut(id_khach_hang, (err, data) => {
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

exports.UpdateStatus = (req, res) => {
    const data = {
        id_trang_thai: req.body.id_trang_thai,
        ten_trang_thai: req.body.ten_trang_thai,
    };

    status.update(data, (err, results) => {
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

exports.getBillByStatus = (req, res) => {

    const { id_trang_thai } = req.body;
    console.log(id_trang_thai);

    status.getBillByStatus(id_trang_thai, (err, data) => {
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



exports.getStatusNew = (req, res) => {

    const id_hd_dat = req.params.id_hd_dat;

    status.getStatusNewBill(id_hd_dat, (err, data) => {
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

exports.getAllStatus = (req, res) => {

    // const id_khach_hang = req.params.id_khach_hang;
    const data = {};

    status.getAll(data, (err, data) => {
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

exports.UpdateStatusByIdKhIdHd = (req, res) => {
    const data = {
        id_trang_thai: req.body.id_trang_thai,
        id_khach_hang: req.body.id_khach_hang,
        id_hd_dat: req.body.id_hd_dat,
    };

    status.updateByIdKhIdHd(data, (err, results) => {
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


