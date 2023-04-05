const detailinvoiceoutput = require('../../models/invoiceoutput/detailinvoiceoutput.model')

exports.getBill = (req, res) => {
    const bill_day = req.query.bill_day;
    const bill_month = req.query.bill_month;
    const bill_year = req.query.bill_year;
    const bill_everyYear = req.query.bill_everyYear;


    const option = {
        bill_day,
        bill_month,
        bill_year,
        bill_everyYear
    };
    console.log('test option', option);

    detailinvoiceoutput.getAll(option, (err, products) => {
        if (err) {
            console.log(err);
            return;
        }
        if (!products) {
            return res.status(400).json({
                success: 0,
                data: 'Get product error',
            });
        }

        return res.json({
            success: 1,
            message: 'Get product successfully',
            products,
        });
    });
};



exports.addDetailInvoiceOutput = (req, res) => {
    const { id_sp, id_hd_dat, so_luong, id_mau_sac, id_kich_thuoc } = req.body;

    if (id_sp, id_hd_dat, so_luong, id_mau_sac, id_kich_thuoc) {
        const newInvoice = new detailinvoiceoutput({
            id_sp: id_sp,
            id_hd_dat: id_hd_dat,
            so_luong: so_luong,
            id_mau_sac: id_mau_sac,
            id_kich_thuoc: id_kich_thuoc,

        });
        detailinvoiceoutput.create(newInvoice, (err, result) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'chi tiet Hoa don xuat khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them chi tiet hoa don xuat thanh cong',
                data: result.inserId,

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


exports.removeDetailInvoiceOutput = (req, res) => {
    const id_hd_dat = req.body;

    if (id_hd_dat) {

        detailinvoiceoutput.remove(id_hd_dat, (err, id_hd_dat) => {
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

exports.getAllDetailInvoiceOutput = (req, res) => {
    const data = {};


    detailinvoiceoutput.get(data, (err, data) => {

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

exports.getDetailInvoiceByID = (req, res) => {
    const data = req.body;
    console.log('vai data', data);
    detailinvoiceoutput.getbyId(data, (err, result) => {

        if (err) {
            return res.status(400).json({
                success: 0,

            });


        }
        return res.status(200).json({
            data: result,
        });
    });

};


// exports.UpdateInvoiceOutput = (req, res) => {
//     const data = {
//         id_phuong_thuc_tt: req.body.id_phuong_thuc_tt,
//         ten_dc: req.body.ten_dc,
//         ten_khach_hang: req.body.ten_khach_hang,
//         sdt_khach_hang: req.body.sdt_khach_hang,
//         tong_tien: req.body.tong_tien,
//         id_hd_dat: req.body.id_hd_dat,


//     };

//     invoiceoutput.update(data, (err, results) => {
//         if (err) {
//             console.log(err);
//             return;
//         }

//         if (!results) {
//             return res.status(404).json({
//                 success: 0,
//                 message: 'Cap nhat that bai',
//             });
//         } else {
//             return res.json({
//                 success: 1,
//                 message: 'Cap nhat thanh cong',
//             });
//         }
//     });
// };
