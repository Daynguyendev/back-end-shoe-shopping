const sql = require("../db");
class provider {
    constructor(item) {
        this.ten_nha_cc = item.ten_nha_cc;
        this.dia_chi_cc = item.dia_chi_cc;
    }
}

provider.create = (data, callBack) => {
    sql.query(`INSERT INTO nha_cung_cap SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

provider.remove = (data, callBack) => {
    sql.query("DELETE FROM nha_cung_cap WHERE id_nha_cc = ?", [data.id_nha_cc], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};



provider.get = (data, callBack) => {
    console.log('hehe');
    sql.query("SELECT * FROM nha_cung_cap WHERE 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

provider.update = (data, callBack) => {
    sql.query(
        `UPDATE nha_cung_cap SET ten_nha_cc = ?,  dia_chi_cc = ? WHERE id_nha_cc = ?;`,
        [
            data.ten_nha_cc,
            data.dia_chi_cc,
            data.id_nha_cc,

        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};




module.exports = provider;