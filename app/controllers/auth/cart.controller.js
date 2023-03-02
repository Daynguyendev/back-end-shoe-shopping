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
                massage: 'Loi',


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
                massage: 'Loi',
            });
        }
        return res.json({
            data: results,
        });
    });
};


exports.removeCart = (req, res) => {
    const data = {
        id_sp: req.params.id_sp,
        id_khach_hang: req.params.id_khach_hang,
        ten_mau_sac: req.params.ten_mau_sac,
        ten_kich_thuoc: req.params.ten_kich_thuoc,
    };

    if (data) {

        cart.remove(data, (err, results) => {
            if (err) {
                return res.status(400).json({
                    massage: 'Loi',
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                cart: results,
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

exports.UpdateCart = (req, res) => {
    const data = {
        id_gio_hang: req.body.id_gio_hang,
        id_sp: req.body.id_sp,
        id_khach_hang: req.body.id_khach_hang,
        ten_mau_sac: req.body.ten_mau_sac,
        ten_kich_thuoc: req.body.ten_kich_thuoc,
        so_luong: req.body.so_luong,

    };

    cart.update(data, (err, results) => {
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

exports.UpdateQuantityCart = (req, res) => {
    const data = {
        id_sp: req.body.id_sp,
        id_khach_hang: req.body.id_khach_hang,
        ten_mau_sac: req.body.ten_mau_sac,
        ten_kich_thuoc: req.body.ten_kich_thuoc,
        so_luong: req.body.so_luong,

    };
    cart.findByIdSpIdKhColorSize(data, (err, results) => {
        if (results) {
            cart.updateQuantity(data, (err, results) => {
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
            }
            );

        }
        else {
            const newCart = new cart({
                id_sp: data.id_sp,
                id_khach_hang: data.id_khach_hang,
                ten_mau_sac: data.ten_mau_sac,
                ten_kich_thuoc: data.ten_kich_thuoc,
                so_luong: data.so_luong,
            });
            cart.create(newCart, (err, results) => {
                if (err) {
                    return res.status(400).json({
                        success: 0,
                        data: 'Gio hang khong hop le',
                    });


                }
                else return res.status(200).json({
                    success: 1,
                    message: 'Them gio hang thanh cong',
                    cart: results,
                });
            });


        }
    })



};


exports.UpdateQuantityButton = (req, res) => {
    const data = {
        id_sp: req.body.id_sp,
        id_khach_hang: req.body.id_khach_hang,
        ten_mau_sac: req.body.ten_mau_sac,
        ten_kich_thuoc: req.body.ten_kich_thuoc,
        so_luong: req.body.so_luong,

    };
    console.log(data);

    cart.updateQuantity(data, (err, results) => {
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



exports.getDetailByID = (req, res) => {

    const id_khach_hang = req.params.id;

    cart.getById(id_khach_hang, (err, results) => {
        if (err) {
            return res.status(400).json({
                success: 0,
                massage: 'Loi'

            });


        }
        return res.json({
            data: results,
        });
    });

};