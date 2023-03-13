const invoiceoutput = require('../../models/invoiceoutput/invoiceoutput.model')
exports.addInvoiceOutput = (req, res) => {
    const { id_khach_hang, id_phuong_thuc_tt, id_dia_chi, id_trang_thai, ngay_lap_hd_dat, tong_tien } = req.body;

    if (id_khach_hang, id_phuong_thuc_tt, id_dia_chi, id_trang_thai, ngay_lap_hd_dat, tong_tien) {
        const newInvoice = new invoiceoutput({
            id_khach_hang: id_khach_hang,
            id_dia_chi: id_dia_chi,
            id_phuong_thuc_tt: id_phuong_thuc_tt,
            id_trang_thai: id_trang_thai,
            ngay_lap_hd_dat: new Date(),
            tong_tien: tong_tien,

        });
        invoiceoutput.create(newInvoice, (err, result) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Hoa don xuat khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them hoa don xuat thanh cong',
                data: result.insertId,
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


exports.removeInvoiceOutput = (req, res) => {
    const id_hd_dat = req.body;

    if (id_hd_dat) {

        invoiceoutput.remove(id_hd_dat, (err, id_hd_dat) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                invoice: id_hd_dat,
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

exports.getStatusByIdBill = (req, res) => {
    const id_hd_dat = req.body;
    console.log(id_hd_dat)

    if (id_hd_dat) {

        invoiceoutput.getByIdBill(id_hd_dat, (err, result) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Get thanh cong',
                data: result[0],
            });
        });


    }

};

exports.checkUserRate = (req, res) => {
    const data = {
        id_khach_hang: req.params.id_khach_hang,
        id_sp: req.body.id_sp,
        id_hd_dat: req.body.id_hd_dat,
    }
    invoiceoutput.findUserRate(data, (err, result) => {
        if (err) {
            return res.status(400).json({
                success: 0,

            });


        }
        console.log('resao', result);
        return res.json({
            success: 1,
            message: 'Get thanh cong',
            data: result,
        });
    });

};


exports.getAllInvoiceOutput = (req, res) => {
    const data = {};


    invoiceoutput.get(data, (err, data) => {

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




// exports.getInvoiceByID = (req, res) => {
//     const ten_hoa_don_nhap = req.params.name;
//     invoiceoutput.getByName(ten_hoa_don_nhap, (err, result) => {

//         if (err) {
//             return res.status(400).json({
//                 success: 0,

//             });


//         }
//         return res.status(200).json({
//             data: result,
//         });
//     });

// };

exports.UpdateInvoiceOutput = (req, res) => {
    const data = {
        id_khach_hang: req.body.id_khach_hang,
        id_dia_chi: req.body.id_dia_chi,
        id_phuong_thuc_tt: req.body.id_phuong_thuc_tt,
        id_trang_thai: req.body.id_trang_thai,
        tong_tien: req.body.tong_tien,


    };

    invoiceoutput.update(data, (err, results) => {
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
