const { json } = require('body-parser');
const productdetail = require('../../models/product/productdetail.model')
exports.addDetailProduct = (req, res) => {
    const { id_sp, so_luong_kho, id_mau_sac, id_kich_thuoc, ten_sp, hinh_anh_chinh, id_loai_sp, id_thuong_hieu, id_khuyen_mai, thong_tin_sp, gia_sp } = req.body;
    console.log('data', id_sp, so_luong_kho, id_mau_sac, id_kich_thuoc, ten_sp, hinh_anh_chinh, id_loai_sp, id_khuyen_mai, id_thuong_hieu, thong_tin_sp, gia_sp)
    productdetail.findproductdetail(id_sp, id_mau_sac, id_kich_thuoc, (err, results) => {
        if (results) {
            productdetail.update(parseInt(so_luong_kho) + parseInt(results.so_luong_kho), id_sp, id_mau_sac, id_kich_thuoc, (err, results) => {
                if (err) {
                    return res.status(400).json({
                        success: 0,
                        err: err.message,

                    })
                }
                return res.json({
                    success: 1,
                    message: 'Cap nhat thanh cong',
                    soluong: so_luong_kho,
                });


            })
        }

        else {
            const newProduct = new productdetail({
                id_sp: id_sp,
                ten_sp: ten_sp,
                gia_sp: gia_sp,
                thong_tin_sp: thong_tin_sp,
                id_thuong_hieu: id_thuong_hieu,
                id_loai_sp: id_loai_sp,
                hinh_anh_chinh: hinh_anh_chinh,
                id_khuyen_mai: id_khuyen_mai,
                id_mau_sac: id_mau_sac,
                id_kich_thuoc: id_kich_thuoc,
                so_luong_kho: so_luong_kho,

            });
            productdetail.create(newProduct, (err, newProduct) => {
                if (err) {
                    return res.status(400).json({
                        success: 0,
                        data: 'Chi tiet sp khong hop le',
                    });


                }
                return res.json({
                    success: 1,
                    message: 'Them Chi tiet sp  thanh cong',
                    detailinvoice: newProduct,
                });
            });

        }

    })

};

exports.UpdateQuantityProduct = (req, res) => {
    const { id_sp, id_mau_sac, id_kich_thuoc, so_luong } = req.body;
    productdetail.findproductdetail(id_sp, id_mau_sac, id_kich_thuoc, (err, results) => {


        if (results) {
            if (parseInt(results.so_luong_kho) - parseInt(so_luong) >= 0) {
                productdetail.update(parseInt(results.so_luong_kho) - parseInt(so_luong), id_sp, id_mau_sac, id_kich_thuoc, (err, results) => {
                    if (err) {
                        return res.status(400).json({
                            success: 0,
                            err: err.message,

                        })
                    }
                    else return res.json({
                        success: 1,
                        message: 'Cap nhat thanh cong',
                    });


                })
            }
            else {
                return res.status(400).json({
                    success: 1,
                    message: 'Cap nhat so luong that bai, vui long kiem tra du lieu',
                });

            }
        }


    })

};


exports.getQuantityInCart = (req, res) => {
    const { id_sp, id_mau_sac, id_kich_thuoc } = req.body;
    productdetail.findproductdetail(id_sp, id_mau_sac, id_kich_thuoc, (err, results) => {


        if (results) {

            return res.status(200).json({
                data: results

            })
        }
        else return res.status(404).json({
            success: 0,
            message: 'Lay so_luong_kho that bai',
        });



    })
}



exports.removeDetailProduct = (req, res) => {
    const id_sp = req.body;

    if (id_sp) {

        productdetail.remove(id_sp, (err, id_sp) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                detailinvoice: id_sp,
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

exports.getAllDetailProduct = (req, res) => {
    const id_sp = req.params.id_sp;
    console.log('test id', id_sp);
    if (id_sp) {
        productdetail.getById(id_sp, (err, result) => {

            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.status(200).json({
                data: result,
            });
        });
    }

};

exports.getAllProduct = (req, res) => {
    const data = {};

    productdetail.get(data, (err, result) => {

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

exports.UpdateDetailProduct = (req, res) => {
    const data = {
        id_sp: req.body.id_sp,
        id_mau_sac: req.body.id_mau_sac,
        id_kich_thuoc: req.body.id_kich_thuoc,
        so_luong_kho: req.body.so_luong_kho,
    };
    console.log('dataupdate', data);

    productdetail.update(data.so_luong_kho, data.id_sp, data.id_mau_sac, data.id_kich_thuoc, (err, results) => {
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

