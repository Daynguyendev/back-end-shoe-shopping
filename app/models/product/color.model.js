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



module.exports = color;