const provider = require('../../models/product/provider.model')

exports.addProvider = (req, res) => {
    const { ten_nha_cc, dia_chi_cc } = req.body;

    if (ten_nha_cc, dia_chi_cc) {
        const newProvider = new provider({
            ten_nha_cc: ten_nha_cc,
            dia_chi_cc: dia_chi_cc,

        });
        provider.create(newProvider, (err, newProvider) => {
            if (err) {
                return res.status(400).json({
                    success: 0,
                    data: 'Nha cung cap khong hop le',
                });


            }
            return res.json({
                success: 1,
                message: 'Them Nha cung cap thanh cong',
                provider: newProvider,
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


exports.removeProvider = (req, res) => {
    const id_nha_cc = req.params.id_nha_cc;

    if (id_nha_cc) {

        provider.remove(id_nha_cc, (err, id_nha_cc) => {
            if (err) {
                return res.status(400).json({
                    success: 0,

                });


            }
            return res.json({
                success: 1,
                message: 'Xoa thanh cong',
                provider: id_nha_cc,
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

exports.getAllProvider = (req, res) => {
    console.log('hehe')
    const data = {};


    provider.get(data, (err, data) => {

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


exports.UpdateProvider = (req, res) => {
    const data = {
        id_nha_cc: req.body.id_nha_cc,
        ten_nha_cc: req.body.ten_nha_cc,
        dia_chi_cc: req.body.dia_chi_cc,
    };

    provider.update(data, (err, results) => {
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