const sql = require("../db");
class invoiceinput {
    constructor(bill) {
        this.ten_hoa_don_nhap = bill.ten_hoa_don_nhap;
        this.ngay_lap_hd = new Date();
        this.tong_tien = bill.tong_tien;
    }
}


invoiceinput.findInvoice = (ten_hoa_don_nhap, callBack) => {
    sql.query("SELECT * from hd_nhap_hang WHERE ten_hoa_don_nhap = ?", ten_hoa_don_nhap, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res[0]);
    });
};
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

invoiceinput.remove = (id_hd_nhap_hang, callBack) => {
    sql.query("DELETE FROM hd_nhap_hang WHERE id_hd_nhap_hang  = ?", id_hd_nhap_hang, (err, res) => {
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


invoiceinput.update = (data, callBack) => {
    sql.query(
        `UPDATE hd_nhap_hang SET ten_hoa_don_nhap = ? WHERE id_hd_nhap_hang = ?;`,
        [
            data.ten_hoa_don_nhap,
            data.id_hd_nhap_hang,

        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};






module.exports = invoiceinput;