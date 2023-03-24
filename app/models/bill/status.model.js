const sql = require("../db");
class status {
    constructor(status) {
        this.ten_trang_thai = status.ten_trang_thai;
    }
}

status.create = (data, callBack) => {
    sql.query(`INSERT INTO trang_thai SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

status.remove = (id_trang_thai, callBack) => {
    sql.query("DELETE FROM trang_thai WHERE id_trang_thai = ?", id_trang_thai, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

status.update = (data, callBack) => {
    console.log('test data model update', data);
    sql.query(
        `UPDATE trang_thai SET ten_trang_thai = ? WHERE id_trang_thai = ?;`,
        [
            data.ten_trang_thai,
            data.id_trang_thai,

        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};

status.updateByIdKhIdHd = (data, callBack) => {
    console.log(data)
    sql.query(
        `UPDATE hd_dat_hang SET id_trang_thai = ? WHERE id_hd_dat = ? and id_khach_hang = ?;`,
        [
            data.id_trang_thai,
            data.id_hd_dat,
            data.id_khach_hang,

        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};



status.getStatusByBillOut = (id_khach_hang, callBack) => {
    console.log(id_khach_hang)
    sql.query("SELECT hd_dat_hang.id_hd_dat, dia_chi.ten_khach_hang, dia_chi.id_khach_hang,dia_chi.ten_dia_chi, hd_dat_hang.ngay_lap_hd_dat,hd_dat_hang.tong_tien, trang_thai.id_trang_thai, trang_thai.ten_trang_thai FROM (hd_dat_hang INNER JOIN trang_thai ON hd_dat_hang.id_trang_thai = trang_thai.id_trang_thai) INNER JOIN dia_chi ON dia_chi.id_dia_chi = hd_dat_hang.id_dia_chi  Where hd_dat_hang.id_khach_hang = ?;", id_khach_hang, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};


status.getBillByStatus = (id_trang_thai, callBack) => {
    console.log(id_trang_thai)
    sql.query("SELECT hd_dat_hang.id_hd_dat, dia_chi.ten_khach_hang, hd_dat_hang.id_khach_hang,dia_chi.ten_dia_chi, hd_dat_hang.ngay_lap_hd_dat,hd_dat_hang.tong_tien, trang_thai.id_trang_thai, trang_thai.ten_trang_thai FROM (hd_dat_hang INNER JOIN trang_thai ON hd_dat_hang.id_trang_thai = trang_thai.id_trang_thai) INNER JOIN dia_chi ON dia_chi.id_dia_chi = hd_dat_hang.id_dia_chi Where hd_dat_hang.id_trang_thai = ?;", id_trang_thai, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};



status.getStatusNewBill = (id_hd_dat, callBack) => {
    console.log(id_hd_dat)
    sql.query("SELECT * from hd_dat_hang INNER JOIN trang_thai on hd_dat_hang.id_trang_thai = trang_thai.id_trang_thai Where hd_dat_hang.id_hd_dat = ?;", id_hd_dat, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};



status.getAll = (data, callBack) => {
    sql.query("SELECT * FROM trang_thai Where 1;", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};


module.exports = status;