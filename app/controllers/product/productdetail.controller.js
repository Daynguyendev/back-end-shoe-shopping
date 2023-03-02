const productdetail = require('../../models/product/productdetail.model')

exports.addDetailProduct = (req, res) => {
    const { id_sp, so_luong, ten_mau_sac, ten_kich_thuoc } = req.body;

    if (id_sp, ten_mau_sac, ten_kich_thuoc, so_luong) {
        const newProduct = new productdetail({
            id_sp: id_sp,
            ten_mau_sac: ten_mau_sac,
            ten_kich_thuoc: ten_kich_thuoc,
            so_luong: so_luong,
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
    else {

        return res.status(400).json({
            success: 0,
            data: 'Vui long nhap day du thong tin',
        });




    }

};


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
    const id_sp = req.params.id;
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


// exports.getProductByIdSpColor = (req, res) => {

//     const id_sp = req.params.id
//     const id_mau_sac = req.params.id_mau_sac

//     console.log(id_sp, id_mau_sac)

//     if (id_sp, id_mau_sac) {
//         productdetail.getByIdSpColor(id_sp, id_mau_sac, (err, result) => {

//             if (err) {
//                 return res.status(400).json({
//                     success: 0,

//                 });


//             }
//             return res.status(200).json({
//                 data: result,
//             });
//         });
//     }

// };
// exports.getProductByIdSpSize = (req, res) => {

//     const id_sp = req.params.id
//     const id_kich_thuoc = req.params.id_kich_thuoc

//     console.log(id_sp, id_kich_thuoc)

//     if (id_sp, id_kich_thuoc) {
//         productdetail.getByIdSpSize(id_sp, id_kich_thuoc, (err, result) => {

//             if (err) {
//                 return res.status(400).json({
//                     success: 0,

//                 });


//             }
//             return res.status(200).json({
//                 data: result,
//             });
//         });
//     }

// };


// exports.getProductByIdSpSizeColor = (req, res) => {

//     const id_sp = req.params.id
//     const id_kich_thuoc = req.params.id_kich_thuoc
//     const id_mau_sac = req.params.id_mau_sac


//     console.log(id_sp, id_kich_thuoc, id_mau_sac)

//     if (id_sp, id_kich_thuoc, id_mau_sac) {
//         productdetail.getByIdSpColorSize(id_sp, id_kich_thuoc, id_mau_sac, (err, result) => {

//             if (err) {
//                 return res.status(400).json({
//                     success: 0,

//                 });


//             }
//             return res.status(200).json({
//                 data: result,
//             });
//         });
//     }

// };



exports.UpdateDetailProduct = (req, res) => {
    const data = {
        id_sp: req.body.id_sp,
        id_mau_sac: req.body.id_mau_sac,
        ten_mau_sac: req.body.ten_mau_sac,
        id_kich_thuoc: req.body.id_kich_thuoc,
        ten_kich_thuoc: req.body.ten_kich_thuoc,
        so_luong: req.body.so_luong,
    };

    productdetail.update(data, (err, results) => {
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

