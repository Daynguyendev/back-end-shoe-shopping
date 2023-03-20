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
            invoicedetail.getTotalInvoice(id_hd_nhap_hang, (err, result) => {
                if (err) {
                    return res.status(400).json({
                        success: 0,
                        data: 'Lay tong tien khong thanh cong',
                    });
                }
                console.log('test tong tien', result[0].tong_tien)
                invoicedetail.UpdateTotalInvoice(result[0].tong_tien, id_hd_nhap_hang, (err, results) => {
                    if (err) {
                        return res.status(400).json({
                            success: 0,
                            data: 'Update tong tien khong thanh cong',
                        });
                    }
                    else {
                        return res.json({
                            success: 1,
                            message: 'Them chi tiet hoa don va update tong tien thanh cong',
                            data: results,
                        });

                    }
                });
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

        invoicedetail.getbyId(id_chi_tiet_hd, (err, IDresult) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Lay hd_dat_hang khong thanh cong',
                });
            }
            else {
                invoicedetail.remove(id_chi_tiet_hd, (err, id_chi_tiet_hd) => {
                    if (err) {
                        return res.status(400).json({
                            success: 0,

                        });
                    }

                    invoicedetail.getTotalInvoice(IDresult[0].id_hd_nhap_hang, (err, result) => {
                        if (err) {
                            return res.status(400).json({
                                success: 0,
                                data: 'Lay tong tien khong thanh cong',
                            });
                        }
                        console.log('test tong tien', result[0].tong_tien)
                        invoicedetail.UpdateTotalInvoice(result[0].tong_tien, IDresult[0].id_hd_nhap_hang, (err, results) => {
                            if (err) {
                                return res.status(400).json({
                                    success: 0,
                                    data: 'Update tong tien khong thanh cong',
                                });
                            }
                            else {

                                return res.status(200).json({
                                    success: 1,
                                    data: 'Xoa san pham va update total thanh cong',
                                });


                            }
                        });
                    });

                });
            }
        })
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
        }
        invoicedetail.getTotalInvoice(data.id_hd_nhap_hang, (err, result) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Lay tong tien khong thanh cong',
                });
            }
            console.log('test tong tien', result[0].tong_tien)
            invoicedetail.UpdateTotalInvoice(result[0].tong_tien, data.id_hd_nhap_hang, (err, results) => {
                if (err) {
                    return res.status(400).json({
                        success: 0,
                        data: 'Update tong tien khong thanh cong',
                    });
                }
                else {
                    return res.json({
                        success: 1,
                        message: 'Them chi tiet hoa don va update tong tien thanh cong',
                        data: results,
                    });

                }
            });
        });
    });
};


exports.getTotal = (req, res) => {
    const id_hd_nhap_hang = req.params.id_hd_nhap_hang;
    console.log(id_hd_nhap_hang)
    invoicedetail.getTotalInvoice(id_hd_nhap_hang, (err, result) => {

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

