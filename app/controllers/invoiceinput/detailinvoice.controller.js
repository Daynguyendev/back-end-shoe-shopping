const invoicedetail = require('../../models/Invoiceinput/detailinvoice.model')

exports.addDetailInvoice = (req, res) => {
    const { id_sp, id_hd_nhap_hang, ten_mau_sac, ten_kich_thuoc, so_luong, gia_nhap } = req.body;

    if (id_sp, id_hd_nhap_hang, ten_mau_sac, ten_kich_thuoc, so_luong, gia_nhap) {
        const newInvoice = new invoicedetail({
            id_sp: id_sp,
            id_hd_nhap_hang: id_hd_nhap_hang,
            ten_mau_sac: ten_mau_sac,
            ten_kich_thuoc: ten_kich_thuoc,
            so_luong: so_luong,
            gia_nhap: gia_nhap
        });
        invoicedetail.create(newInvoice, (err, newInvoice) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Chi tiet hoa don nhap khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them Chi tiet hoa don nhap thanh cong',
                detailinvoice: newInvoice,
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


exports.removeDetailInvoice = (req, res) => {
    const id_hd_nhap_hang = req.body;

    if (id_hd_nhap_hang) {

        invoicedetail.remove(id_hd_nhap_hang, (err, id_hd_nhap_hang) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                detailinvoice: id_hd_nhap_hang,
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

exports.getAllDetailInvoice = (req, res) => {
    const data = {};


    invoicedetail.get(data, (err, data) => {

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
