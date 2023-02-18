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

category.remove = (data, callBack) => {
    sql.query("DELETE FROM loai_sp WHERE id_loai_sp = ?", [data.id_loai_sp], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};



module.exports = category;