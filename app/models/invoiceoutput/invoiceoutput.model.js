const sql = require("../db");
class invoiceoutput {
    constructor(bill) {
        this.id_khach_hang = bill.id_khach_hang;
        this.id_dia_chi = bill.id_dia_chi;
        this.id_phuong_thuc_tt = bill.id_phuong_thuc_tt;
        this.id_trang_thai = bill.id_trang_thai;
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
    sql.query("SELECT * FROM hd_dat_hang INNER JOIN dia_chi ON hd_dat_hang.id_dia_chi = dia_chi.id_dia_chi INNER JOIN trang_thai ON hd_dat_hang.id_trang_thai = trang_thai.id_trang_thai WHERE 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

invoiceoutput.getByIdBill = (data, callBack) => {
    sql.query("SELECT * FROM hd_dat_hang WHERE id_hd_dat = ? ", [data.id_hd_dat], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

invoiceoutput.findUserRate = (data, callBack) => {
    console.log(data.id_khach_hang, data.id_sp, data.id_hd_dat)
    sql.query("SELECT * FROM danh_gia_sp WHERE id_hd_dat = ? and id_khach_hang = ? and id_sp = ? ", [data.id_hd_dat, data.id_khach_hang, data.id_sp],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                callBack(err, null);
                return;
            }
            callBack(null, res);
        });
};


invoiceoutput.getByStatus = (data, callBack) => {
    sql.query("SELECT * FROM hd_dat_hang INNER JOIN dia_chi ON hd_dat_hang.id_dia_chi = dia_chi.id_dia_chi WHERE 1", (err, res) => {
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
        `UPDATE hd_dat_hang SET id_khach_hang = ?, id_dia_chi = ?, id_phuong_thuc_tt=? , id_trang_thai=? ,
    tong_tien=? WHERE id_hd_dat = ?;`,
        [
            data.id_khach_hang,
            data.id_dia_chi,
            data.id_phuong_thuc_tt,
            data.id_trang_thai,
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