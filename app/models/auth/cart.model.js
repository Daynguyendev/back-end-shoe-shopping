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

cart.findcartInDB = (id_sp, id_khach_hang, ten_mau_sac, ten_kich_thuoc, callBack) => {
    console.log('testdatamodelfin', id_sp, id_khach_hang, ten_mau_sac, ten_kich_thuoc)

    sql.query(`SELECT * FROM gio_hang WHERE id_sp = ? and id_khach_hang =? and ten_mau_sac= ? and ten_kich_thuoc= ?`, [

        id_sp,
        id_khach_hang,
        ten_mau_sac,
        ten_kich_thuoc,
    ], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res[0]);
    });
};
cart.updateQuantityIncart = (so_luong, id_sp, id_khach_hang, ten_mau_sac, ten_kich_thuoc, callBack) => {
    console.log('testdataquantity mode', id_sp, id_khach_hang, ten_mau_sac, ten_kich_thuoc, so_luong)

    sql.query(
        `UPDATE gio_hang SET so_luong =?  WHERE id_sp = ? and id_khach_hang=? and ten_mau_sac=? and ten_kich_thuoc=?;`,
        [
            so_luong,
            id_sp,
            id_khach_hang,
            ten_mau_sac,
            ten_kich_thuoc,
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};




cart.remove = (data, callBack) => {
    console.log("remove: ", data)
    sql.query("DELETE FROM gio_hang WHERE id_sp = ? and id_khach_hang = ? and ten_mau_sac=? and ten_kich_thuoc=?", [
        data.id_sp,
        data.id_khach_hang,
        data.ten_mau_sac,
        data.ten_kich_thuoc,

    ], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

cart.removeAll = (data, callBack) => {
    sql.query("DELETE FROM gio_hang WHERE id_khach_hang = ?", [
        data.id_khach_hang,
    ], (err, res) => {
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
    sql.query("SELECT * FROM gio_hang WHERE id_khach_hang = ?", data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

cart.getFullByIdKH = (id_khach_hang, callBack) => {
    sql.query("SELECT *FROM gio_hang INNER JOIN san_pham ON gio_hang.id_sp=san_pham.id_sp Where id_khach_hang = ?;", id_khach_hang, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};


cart.update = (data, callBack) => {
    sql.query(
        `UPDATE gio_hang SET id_sp = ?, id_khach_hang = ?, ten_mau_sac=? , ten_kich_thuoc=?, so_luong =? WHERE id_gio_hang = ?;`,
        [
            data.id_sp,
            data.id_khach_hang,
            data.ten_mau_sac,
            data.ten_kich_thuoc,
            data.so_luong,
            data.id_gio_hang,
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};


cart.findByIdSpIdKhColorSize = (data, result) => {
    sql.query(`SELECT * from gio_hang WHERE id_sp = ? and id_khach_hang = ? and ten_mau_sac=? and ten_kich_thuoc=?`,
        [data.id_sp,
        data.id_khach_hang,
        data.ten_mau_sac,
        data.ten_kich_thuoc],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.length) {
                result(null, res[0])
                return;
            }
            result(null, null);
        });
}

cart.updateQuantity = (data, callBack) => {
    sql.query(
        `UPDATE gio_hang SET so_luong =? WHERE id_sp = ? and id_khach_hang = ? and ten_mau_sac=? and ten_kich_thuoc=?;`,
        [
            data.so_luong,
            data.id_sp,
            data.id_khach_hang,
            data.ten_mau_sac,
            data.ten_kich_thuoc,
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};


cart.getById = (data, callBack) => {
    sql.query("SELECT * FROM gio_hang INNER JOIN san_pham ON san_pham.id_sp = gio_hang.id_sp INNER JOIN khuyen_mai ON san_pham.id_khuyen_mai = khuyen_mai.id_khuyen_mai WHERE id_khach_hang = ?", data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};







module.exports = cart;