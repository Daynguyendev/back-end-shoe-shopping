const khach_hang = require('../../models/auth/user.model');
exports.getIDByNameUser = (req, res) => {
    const data = req.body;
    khach_hang.getIdbyEmail(data, (err, result) => {
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
