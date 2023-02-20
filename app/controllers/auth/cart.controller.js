const cart = require('../../models/auth/cart.model')

exports.addCart = (req, res) => {
    const { id_sp, ten_mau_sac, ten_kich_thuoc, so_luong, id_khach_hang } = req.body;
    if (id_sp, ten_mau_sac, ten_kich_thuoc, so_luong, id_khach_hang) {
        const newCart = new cart({
            id_sp: id_sp,
            id_khach_hang: id_khach_hang,
            ten_mau_sac: ten_mau_sac,
            ten_kich_thuoc: ten_kich_thuoc,
            so_luong: so_luong,
        });
        cart.create(newCart, (err, newCart) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Gio hang khong hop le',
                });


            }
            return res.status(200).json({
                success: 1,
                message: 'Them gio hang thanh cong',
                cart: newCart,
            });
        });


    }
    else {

        return res.status(400).json({
            success: 0,
            data: 'Vui long nhap day du thong tin ',
        });




    }

};


exports.getAllItemCart = (req, res) => {

    const data = {};

    cart.get(data, (err, data) => {
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

exports.getAllItemCartById = (req, res) => {

    const id_khach_hang = req.params.id;

    cart.getByIdKhachHang(id_khach_hang, (err, results) => {
        if (err) {
            return res.status(400).json({
                success: 0,

            });


        }
        return res.json({
            data: results,
        });
    });

};



exports.removeCart = (req, res) => {
    const id_gio_hang = req.body;

    if (id_gio_hang) {

        cart.remove(id_gio_hang, (err, id_gio_hang) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                cart: id_gio_hang,
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