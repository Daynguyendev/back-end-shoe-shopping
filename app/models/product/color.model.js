const sql = require("../db");
class color {
    constructor(item) {
        this.ten_mau_sac = item.ten_mau_sac;
    }
}

color.create = (data, callBack) => {
    sql.query(`INSERT INTO mau_sac SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

color.remove = (data, callBack) => {
    sql.query(`DELETE FROM mau_sac WHERE id_mau_sac = ?`, [data.id_mau_sac], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

color.get = (data, callBack) => {
    sql.query("SELECT * FROM mau_sac WHERE 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

color.update = (data, callBack) => {
    sql.query(
        `UPDATE mau_sac SET ten_mau_sac = ? WHERE id_mau_sac = ?;`,
        [
            data.ten_mau_sac,
            data.id_mau_sac,

        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};

color.getNameByID = (id_mau_sac, callBack) => {
    sql.query(" SELECT * FROM mau_sac WHERE id_mau_sac =?", [id_mau_sac], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};


color.getColorByIdSpDetailProduct = (id_sp, callBack) => {
    sql.query(" SELECT DISTINCT ten_mau_sac FROM chi_tiet_sp WHERE id_sp = ?", [id_sp], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};








module.exports = color;