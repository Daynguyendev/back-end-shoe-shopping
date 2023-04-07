const sql = require("../db");

class checkoutvnpay {
    constructor(status) {
        this.id_hd_dat = status.id_hd_dat;
        this.ten_trang_thai = ten_trang_thai;
        this.ten_thanh_toan = ten_thanh_toan;
    }
}

checkoutvnpay.create = (data, callBack) => {
    sql.query(`INSERT INTO trang_thai_thanh_toan SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};


checkoutvnpay.update = (data, callBack) => {
    sql.query(
        `UPDATE trang_thai_thanh_toan SET ten_trang_thai = ? , ten_thanh_toan =?  WHERE id_hd_dat = ?;`,
        [
            data.ten_trang_thai,
            data.ten_thanh_toan,
            data.id_hd_dat,
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};

module.exports = checkoutvnpay;