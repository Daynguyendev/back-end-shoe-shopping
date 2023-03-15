const sql = require("../db");
class category {
    constructor(item) {

        this.ten_loai_sp = item.ten_loai_sp;
    }
}

category.create = (data, callBack) => {
    sql.query(`INSERT INTO loai_sp SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

category.remove = (id_loai_sp, callBack) => {

    sql.query("DELETE FROM loai_sp WHERE id_loai_sp = ?", id_loai_sp, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

category.get = (data, callBack) => {
    sql.query("SELECT * FROM loai_sp WHERE 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

category.update = (data, callBack) => {
    sql.query(
        `UPDATE loai_sp SET ten_loai_sp = ? WHERE id_loai_sp = ?;`,
        [
            data.ten_loai_sp,
            data.id_loai_sp,

        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};




module.exports = category;