const dia_chi = require('../../models/auth/address.model')
exports.addDiachi = (req, res) => {
    const { ten_dia_chi, ten_khach_hang, sdt_khach_hang, id_khach_hang } = req.body;
    if (ten_dia_chi && ten_khach_hang && sdt_khach_hang && id_khach_hang) {
        const newDiachi = new dia_chi({
            ten_dia_chi: ten_dia_chi,
            id_khach_hang: id_khach_hang,
            ten_khach_hang: ten_khach_hang,
            sdt_khach_hang: sdt_khach_hang
        });
        dia_chi.create(newDiachi, (err, results) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Dia chi khong dung',
                });
            }
            return res.status(200).json({
                success: 1,
                message: 'Nhap thong tin thanh cong',
                data: results.insertId,
            });
        });
    }
    else {
        return res.status(400).json({
            success: 0,
            data: 'Vui long nhap thong tin',
        });
    }
};

exports.removeDiachi = (req, res) => {
    const id_dia_chi = req.params.id;
    console.log('diachicontrol', id_dia_chi)
    if (id_dia_chi) {
        dia_chi.remove(id_dia_chi, (err, id_dia_chi) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Dia chi khong dung',
                });
            }
            return res.json({
                success: 1,
                message: 'Xoa thong tin thanh cong',
            });
        });
    }
    else {

        return res.status(400).json({
            success: 0,
            data: 'Vui long chon dung thong tin',
        });
    }
};

exports.GetAddressById = (req, res) => {
    const id_khach_hang = req.body;
    console.log(id_khach_hang)
    if (id_khach_hang) {
        dia_chi.getById(id_khach_hang, (err, result) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Dia chi khong dung',
                });
            }
            return res.json({
                success: 1,
                message: 'Xuat thong tin thanh cong',
                data: result,
            });
        });
    }
    else {

        return res.status(400).json({
            success: 0,
            data: 'Vui long nhap thong tin',
        });
    }
};
