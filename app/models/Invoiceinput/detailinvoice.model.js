const sql = require("../db");
class invoicedetail {
    constructor(bill) {
        this.id_sp = bill.id_sp;
        this.id_hd_nhap_hang = bill.id_hd_nhap_hang;
        this.ten_mau_sac = bill.ten_mau_sac;
        this.ten_kich_thuoc = bill.ten_kich_thuoc;
        this.so_luong = bill.so_luong;
        this.gia_nhap = bill.gia_nhap;
    }
}

invoicedetail.create = (data, callBack) => {
    sql.query(`INSERT INTO chi_tiet_hd_nhap  SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

invoicedetail.remove = (data, callBack) => {
    sql.query("DELETE FROM chi_tiet_hd_nhap WHERE id_hd_nhap_hang  = ?", [data.id_hd_nhap_hang], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};



invoicedetail.get = (data, callBack) => {
    sql.query("SELECT * FROM chi_tiet_hd_nhap WHERE 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};




module.exports = invoicedetail;