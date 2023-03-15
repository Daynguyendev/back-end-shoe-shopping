const invoicedetail = require('../../models/Invoiceinput/detailinvoice.model')

exports.addDetailInvoice = (req, res) => {
    const { id_sp, id_hd_nhap_hang, id_mau_sac, id_kich_thuoc, so_luong, gia_nhap } = req.body;

    if (id_sp, id_hd_nhap_hang, id_mau_sac, id_kich_thuoc, so_luong, gia_nhap) {
        const newInvoice = new invoicedetail({
            id_sp: id_sp,
            id_hd_nhap_hang: id_hd_nhap_hang,
            id_mau_sac: id_mau_sac,
            id_kich_thuoc: id_kich_thuoc,
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
    const id_chi_tiet_hd = req.params.id_chi_tiet_hd;
    console.log('test id hd', id_chi_tiet_hd)

    if (id_chi_tiet_hd) {

        invoicedetail.remove(id_chi_tiet_hd, (err, id_chi_tiet_hd) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                detailinvoice: id_chi_tiet_hd,
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

exports.getDetailInvoiceByName = (req, res) => {
    const ten_hoa_don_nhap = req.params.ten_hoa_don_nhap;
    console.log('test ten', ten_hoa_don_nhap)
    if (ten_hoa_don_nhap) {

        invoicedetail.getbyName(ten_hoa_don_nhap, (err, result) => {

            if (err) {
                return res.status(400).json({
                    success: 0,
                    massage: 'loi'

                });


            }
            return res.status(200).json({
                data: result

            });
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

exports.UpdateDetailInvoice = (req, res) => {
    const data = {
        id_sp: req.body.id_sp,
        id_hd_nhap_hang: req.body.id_hd_nhap_hang,
        id_mau_sac: req.body.id_mau_sac,
        id_kich_thuoc: req.body.id_kich_thuoc,
        so_luong: req.body.so_luong,
        gia_nhap: req.body.gia_nhap,
        id_chi_tiet_hd: req.body.id_chi_tiet_hd
    };
    invoicedetail.update(data, (err, results) => {
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
