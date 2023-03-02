const sql = require("../db");
class invoiceoutput {
    constructor(bill) {
        this.id_phuong_thuc_tt = bill.id_phuong_thuc_tt;
        this.ten_dc = bill.ten_dc;
        this.ten_khach_hang = bill.ten_khach_hang;
        this.sdt_khach_hang = bill.sdt_khach_hang;
        this.ngay_lap_hd_dat = new Date();
        this.tong_tien = bill.tong_tien;
    }
}

invoiceoutput.create = (data, callBack) => {
    sql.query(`INSERT INTO hd_dat_hang SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

invoiceoutput.remove = (data, callBack) => {
    sql.query("DELETE FROM hd_dat_hang WHERE id_hd_dat  = ?", [data.id_hd_dat], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};



invoiceoutput.get = (data, callBack) => {
    sql.query("SELECT * FROM hd_dat_hang WHERE 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};



invoiceoutput.update = (data, callBack) => {
    sql.query(
        `UPDATE hd_dat_hang SET id_phuong_thuc_tt = ?, ten_dc = ?, ten_khach_hang=? , sdt_khach_hang=? ,
    tong_tien=? WHERE id_hd_dat = ?;`,
        [
            data.id_phuong_thuc_tt,
            data.ten_dc,
            data.ten_khach_hang,
            data.sdt_khach_hang,
            data.tong_tien,
            data.id_hd_dat,
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};








module.exports = invoiceoutput;