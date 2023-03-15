const sql = require("../db");
class dia_chi {
    constructor(user) {
        this.ten_dia_chi = user.ten_dia_chi;
        this.id_khach_hang = user.id_khach_hang;
        this.ten_khach_hang = user.ten_khach_hang;
        this.sdt_khach_hang = user.sdt_khach_hang;
    }
}


dia_chi.create = (data, callBack) => {
    sql.query("INSERT INTO dia_chi SET ?", data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        console.log("created user: ", res);
        callBack(null, res);
    });
};

dia_chi.remove = (id_dia_chi, callBack) => {
    sql.query(`DELETE FROM dia_chi WHERE id_dia_chi = ?`, id_dia_chi, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

dia_chi.getById = (data, callBack) => {
    sql.query("SELECT * FROM dia_chi WHERE id_khach_hang = ?", [data.id_khach_hang], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
        console.log(res)
    });
};

dia_chi.update = (data, callBack) => {
    sql.query(
        `UPDATE dia_chi SET ten_dia_chi = ?, ten_khach_hang=? , sdt_khach_hang=? WHERE id_dia_chi = ?;`,
        [
            data.ten_dia_chi,
            data.ten_khach_hang,
            data.sdt_khach_hang,
            data.id_dia_chi,
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};


module.exports = dia_chi;