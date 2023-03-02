const sql = require("../db");
class status {
    constructor(status) {
        this.ten_trang_thai = status.ten_trang_thai;
    }
}

status.create = (data, callBack) => {
    sql.query(`INSERT INTO trang_thai SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

status.remove = (data, callBack) => {
    sql.query("DELETE FROM trang_thai WHERE id_trang_thai = ?", [data.id_trang_thai], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

status.update = (data, callBack) => {
    sql.query(
        `UPDATE trang_thai SET ten_trang_thai = ? WHERE id_trang_thai = ?;`,
        [
            data.ten_trang_thai,
            data.id_trang_thai,

        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};



module.exports = status;