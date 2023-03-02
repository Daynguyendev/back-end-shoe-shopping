const invoiceoutput = require('../../models/invoiceoutput/invoiceoutput.model')


exports.addInvoiceOutput = (req, res) => {
    const { id_phuong_thuc_tt, ten_dc, ten_khach_hang, sdt_khach_hang, tong_tien } = req.body;

    if (id_phuong_thuc_tt, ten_dc, ten_khach_hang, sdt_khach_hang, tong_tien) {
        const newInvoice = new invoiceoutput({
            id_phuong_thuc_tt: id_phuong_thuc_tt,
            ten_dc: ten_dc,
            ten_khach_hang: ten_khach_hang,
            sdt_khach_hang: sdt_khach_hang,
            tong_tien: tong_tien,

        });
        invoiceoutput.create(newInvoice, (err, newInvoice) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Hoa don xuat khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them hoa don xuat thanh cong',
                invoice: newInvoice,
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
        id_phuong_thuc_tt: req.body.id_phuong_thuc_tt,
        ten_dc: req.body.ten_dc,
        ten_khach_hang: req.body.ten_khach_hang,
        sdt_khach_hang: req.body.sdt_khach_hang,
        tong_tien: req.body.tong_tien,
        id_hd_dat: req.body.id_hd_dat,


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
