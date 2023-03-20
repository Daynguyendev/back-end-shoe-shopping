const sql = require("../db");
class invoicedetail {
    constructor(bill) {
        this.id_sp = bill.id_sp;
        this.id_hd_nhap_hang = bill.id_hd_nhap_hang;
        this.id_mau_sac = bill.id_mau_sac;
        this.id_kich_thuoc = bill.id_kich_thuoc;
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

invoicedetail.remove = (id_chi_tiet_hd, callBack) => {
    console.log('test id', id_chi_tiet_hd)
    sql.query("DELETE FROM chi_tiet_hd_nhap WHERE id_chi_tiet_hd  = ?", id_chi_tiet_hd, (err, res) => {
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


invoicedetail.getbyName = (ten_hoa_don_nhap, callBack) => {
    console.log('test ten hd', ten_hoa_don_nhap)
    sql.query("SELECT * FROM chi_tiet_hd_nhap INNER JOIN hd_nhap_hang ON chi_tiet_hd_nhap.id_hd_nhap_hang = hd_nhap_hang.id_hd_nhap_hang WHERE  hd_nhap_hang.ten_hoa_don_nhap = ?", ten_hoa_don_nhap, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);

    });
};
invoicedetail.getbyId = (id_chi_tiet_hd, callBack) => {
    console.log('test ten hd', id_chi_tiet_hd)
    sql.query("SELECT id_hd_nhap_hang FROM  chi_tiet_hd_nhap   WHERE  id_chi_tiet_hd = ?", id_chi_tiet_hd, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);

    });
};
invoicedetail.getTotalInvoice = (id_hd_nhap_hang, callBack) => {
    console.log('test ten hd', id_hd_nhap_hang)
    sql.query("SELECT SUM(so_luong * gia_nhap) AS tong_tien FROM chi_tiet_hd_nhap  WHERE  id_hd_nhap_hang = ?", id_hd_nhap_hang, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);

    });
};

invoicedetail.UpdateTotalInvoice = (tong_tien, id_hd_nhap_hang, callBack) => {
    sql.query(
        `UPDATE hd_nhap_hang SET tong_tien = ? WHERE id_hd_nhap_hang = ?;`,
        [
            tong_tien,
            id_hd_nhap_hang,
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};

invoicedetail.update = (data, callBack) => {
    sql.query(
        `UPDATE chi_tiet_hd_nhap SET id_sp = ? ,id_hd_nhap_hang =? ,id_mau_sac =? ,id_kich_thuoc =?, so_luong=?,gia_nhap=?  WHERE id_chi_tiet_hd = ?;`,
        [
            data.id_sp,
            data.id_hd_nhap_hang,
            data.id_mau_sac,
            data.id_kich_thuoc,
            data.so_luong,
            data.gia_nhap,
            data.id_chi_tiet_hd,
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};





module.exports = invoicedetail;