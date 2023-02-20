const sql = require("../db");
class cart {
    constructor(item) {
        this.id_sp = item.id_sp;
        this.id_khach_hang = item.id_khach_hang;
        this.ten_mau_sac = item.ten_mau_sac;
        this.ten_kich_thuoc = item.ten_kich_thuoc;
        this.so_luong = item.so_luong;
    }
}

cart.create = (data, callBack) => {
    sql.query(`INSERT INTO gio_hang SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

cart.remove = (data, callBack) => {
    sql.query("DELETE FROM gio_hang WHERE id_gio_hang = ?", [data.id_gio_hang], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

cart.get = (data, callBack) => {
    sql.query("SELECT * FROM gio_hang WHERE 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

cart.getByIdKhachHang = (data, callBack) => {
    sql.query("SELECT * FROM gio_hang WHERE id_khach_hang", data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};






module.exports = cart;