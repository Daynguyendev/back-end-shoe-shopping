const invoiceinput = require('../../models/Invoiceinput/invoiceinput.model')


exports.addInvoiceInput = (req, res) => {
    const { ten_hoa_don_nhap, tong_tien } = req.body;

    if (ten_hoa_don_nhap, tong_tien) {
        const newInvoice = new invoiceinput({
            ten_hoa_don_nhap: ten_hoa_don_nhap,
            tong_tien: tong_tien,

        });
        invoiceinput.create(newInvoice, (err, newInvoice) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Hoa don nhap khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them hoa don nhap thanh cong',
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


exports.removeInvoiceInput = (req, res) => {
    const id_hd_nhap_hang = req.params.id_hd_nhap_hang;

    if (id_hd_nhap_hang) {

        invoiceinput.remove(id_hd_nhap_hang, (err, id_hd_nhap_hang) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                invoice: id_hd_nhap_hang,
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

exports.getAllInvoiceInput = (req, res) => {
    const data = {};


    invoiceinput.get(data, (err, data) => {

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

exports.getInvoiceByID = (req, res) => {
    const ten_hoa_don_nhap = req.params.name;
    console.log(ten_hoa_don_nhap)
    invoiceinput.getByName(ten_hoa_don_nhap, (err, result) => {

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
exports.UpdateInvoiceInput = (req, res) => {
    const data = {
        id_hd_nhap_hang: req.body.id_hd_nhap_hang,
        ten_hoa_don_nhap: req.body.ten_hoa_don_nhap,
    };

    invoiceinput.update(data, (err, results) => {
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


