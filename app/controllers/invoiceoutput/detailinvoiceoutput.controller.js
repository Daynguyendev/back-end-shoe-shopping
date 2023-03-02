const detailinvoiceoutput = require('../../models/invoiceoutput/detailinvoiceoutput.model')


exports.addDetailInvoiceOutput = (req, res) => {
    const { id_sp, id_hd_dat, so_luong, ten_mau_sac, ten_kich_thuoc } = req.body;

    if (id_sp, id_hd_dat, so_luong, ten_mau_sac, ten_kich_thuoc) {
        const newInvoice = new detailinvoiceoutput({
            id_sp: id_sp,
            id_hd_dat: id_hd_dat,
            so_luong: so_luong,
            ten_mau_sac: ten_mau_sac,
            ten_kich_thuoc: ten_kich_thuoc,

        });
        detailinvoiceoutput.create(newInvoice, (err, newInvoice) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'chi tiet Hoa don xuat khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them chi tiet hoa don xuat thanh cong',
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
