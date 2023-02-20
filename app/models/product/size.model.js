const sql = require("../db");
class size {
    constructor(item) {
        this.ten_kich_thuoc = item.ten_kich_thuoc;
    }
}


size.create = (newSize, result) => {
    sql.query("INSERT INTO kich_thuoc SET ?", newSize, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created size: ", { id_kich_thuoc: res.insertId, ...newSize });
        result(null, { id_kich_thuoc: res.insertId, ...newSize });
    });
};

size.remove = (newSize, result) => {
    sql.query("DELETE FROM kich_thuoc WHERE id_kich_thuoc = ?", newSize, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("remove size: ", { id_kich_thuoc: res.insertId, ...newSize });
        result(null, { id_kich_thuoc: res.insertId, ...newSize });
    });
};



size.get = (data, callBack) => {
    sql.query("SELECT * FROM kich_thuoc WHERE 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};



module.exports = size;