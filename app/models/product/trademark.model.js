const sql = require("../db");
class trademark {
    constructor(item) {

        this.ten_thuong_hieu = item.ten_thuong_hieu;
    }
}

trademark.create = (data, callBack) => {
    sql.query(`INSERT INTO thuong_hieu SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

trademark.remove = (id_thuong_hieu, callBack) => {
    sql.query("DELETE FROM thuong_hieu WHERE id_thuong_hieu = ?", id_thuong_hieu, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

trademark.get = (data, callBack) => {
    sql.query("SELECT * FROM thuong_hieu WHERE 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};


trademark.update = (data, callBack) => {
    sql.query(
        `UPDATE thuong_hieu SET ten_thuong_hieu = ? WHERE id_thuong_hieu = ?;`,
        [
            data.ten_thuong_hieu,
            data.id_thuong_hieu,

        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};





module.exports = trademark;