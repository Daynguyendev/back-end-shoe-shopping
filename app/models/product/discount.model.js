const sql = require("../db");
class discount {
    constructor(item) {
        this.ten_giam_gia = item.ten_giam_gia;
        this.gia_giam = item.gia_giam;
    }
}

discount.create = (data, callBack) => {
    sql.query(`INSERT INTO giam_gia SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

discount.remove = (data, callBack) => {
    sql.query("DELETE FROM giam_gia WHERE id_giam_gia = ?", [data.id_giam_gia], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};



module.exports = discount;