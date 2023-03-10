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



discount.getAll = (data, callBack) => {
    sql.query("SELECT * FROM giam_gia WHERE 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};


discount.update = (data, callBack) => {
    sql.query(
        `UPDATE giam_gia SET ten_giam_gia = ?, gia_giam = ? WHERE id_giam_gia = ?;`,
        [
            data.ten_giam_gia,
            data.gia_giam,
            data.id_giam_gia,
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};




module.exports = discount;