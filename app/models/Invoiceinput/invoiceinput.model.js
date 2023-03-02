const sql = require("../db");
class invoiceinput {
    constructor(bill) {
        this.ten_hoa_don_nhap = bill.ten_hoa_don_nhap;
        this.ngay_lap_hd = new Date();
        this.tong_tien = bill.tong_tien;
    }
}

invoiceinput.create = (data, callBack) => {
    sql.query(`INSERT INTO hd_nhap_hang SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

invoiceinput.remove = (data, callBack) => {
    sql.query("DELETE FROM hd_nhap_hang WHERE id_hd_nhap_hang  = ?", [data.id_hd_nhap_hang], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};



invoiceinput.get = (data, callBack) => {
    sql.query("SELECT * FROM hd_nhap_hang WHERE 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};


invoiceinput.getByName = (ten_hoa_don_nhap, callBack) => {

    sql.query("SELECT id_hd_nhap_hang FROM hd_nhap_hang WHERE ten_hoa_don_nhap = ?", [ten_hoa_don_nhap], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};






module.exports = invoiceinput;