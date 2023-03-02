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

dia_chi.remove = (data, callBack) => {
    sql.query(`DELETE FROM dia_chi WHERE id_dia_chi = ?`, [data.id_dia_chi], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

dia_chi.getById = (data, callBack) => {
    console.log(data)
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


module.exports = dia_chi;