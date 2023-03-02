const sql = require("../db");
class promotion {
    constructor(item) {
        this.ten_khuyen_mai = item.ten_khuyen_mai;
        this.ngay_bat_dau = item.ngay_bat_dau;
        this.ngay_ket_thuc = item.ngay_ket_thuc;
        this.phan_tram_giam = item.phan_tram_giam;

    }
}

promotion.create = (data, callBack) => {
    sql.query(`INSERT INTO khuyen_mai SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

promotion.remove = (data, callBack) => {
    sql.query("DELETE FROM khuyen_mai WHERE id_khuyen_mai = ?", [data.id_khuyen_mai], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};



promotion.getAll = (data, callBack) => {
    sql.query("SELECT * FROM khuyen_mai WHERE 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

promotion.update = (data, callBack) => {
    sql.query(
        `UPDATE khuyen_mai SET ten_khuyen_mai = ?, ngay_bat_dau = ?, ngay_ket_thuc=? , phan_tram_giam=? WHERE id_khuyen_mai = ?;`,
        [
            data.ten_khuyen_mai,
            data.ngay_bat_dau,
            data.ngay_ket_thuc,
            data.phan_tram_giam,
            data.id_khuyen_mai,


        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};




module.exports = promotion;