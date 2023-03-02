const sql = require("../db");
class checkout {
    constructor(item) {
        this.ten_phuong_thuc_tt = item.ten_phuong_thuc_tt;


    }
}

checkout.create = (data, callBack) => {
    sql.query(`INSERT INTO thanh_toan SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

checkout.remove = (data, callBack) => {
    sql.query("DELETE FROM thanh_toan WHERE id_phuong_thuc_tt = ?", [data.id_phuong_thuc_tt], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};



checkout.getAll = (data, callBack) => {
    sql.query("SELECT * FROM thanh_toan WHERE 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

checkout.update = (data, callBack) => {
    sql.query(
        `UPDATE thanh_toan SET ten_phuong_thuc_tt = ? WHERE id_phuong_thuc_tt = ?;`,
        [
            data.ten_phuong_thuc_tt,

            data.id_phuong_thuc_tt,


        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};




module.exports = checkout;