const sql = require("../db");
class productdetail {
    constructor(bill) {
        this.id_sp = bill.id_sp;
        this.ten_sp = bill.ten_sp;
        this.gia_sp = bill.gia_sp;
        this.thong_tin_sp = bill.thong_tin_sp;
        this.id_thuong_hieu = bill.id_thuong_hieu;
        this.id_loai_sp = bill.id_loai_sp;
        this.hinh_anh_chinh = bill.hinh_anh_chinh;
        this.id_khuyen_mai = bill.id_khuyen_mai;
        this.id_mau_sac = bill.id_mau_sac;
        this.id_kich_thuoc = bill.id_kich_thuoc;
        this.so_luong_kho = bill.so_luong_kho;
        this.id_nha_cc = bill.id_nha_cc;
    }
}

productdetail.create = (data, callBack) => {
    sql.query(`INSERT INTO chi_tiet_sp  SET ? `, data, (err, res) => {
        if (err) {
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

productdetail.remove = (data, callBack) => {
    sql.query("DELETE FROM chi_tiet_sp WHERE id_sp  = ?", [data.id_sp], (err, res) => {
        if (err) {
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};



productdetail.getById = (id_sp, callBack) => {
    sql.query("SELECT * FROM chi_tiet_sp INNER JOIN khuyen_mai ON chi_tiet_sp.id_khuyen_mai = khuyen_mai.id_khuyen_mai  WHERE id_sp = ? ", [id_sp], (err, res) => {
        if (err) {
            callBack(err, null);
            return;
        }
        callBack(null, res);

    });
};
productdetail.get = (data, callBack) => {
    sql.query("SELECT * FROM chi_tiet_sp WHERE 1 ", (err, res) => {
        if (err) {
            callBack(err, null);
            return;
        }
        callBack(null, res);

    });
};


productdetail.findproductdetail = (id_sp, id_mau_sac, id_kich_thuoc, callBack) => {
    sql.query(
        `SELECT * FROM  chi_tiet_sp WHERE id_sp = ? and id_mau_sac = ? and id_kich_thuoc=?;`,
        [
            id_sp,
            id_mau_sac,
            id_kich_thuoc,

        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results[0]);
        }
    );
};

productdetail.update = (so_luong_kho, id_sp, id_mau_sac, id_kich_thuoc, callBack) => {

    sql.query(
        `UPDATE chi_tiet_sp SET so_luong_kho=? WHERE id_sp = ? and id_mau_sac = ? and id_kich_thuoc=?;`,
        [
            so_luong_kho,
            id_sp,
            id_mau_sac,
            id_kich_thuoc,

        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};



module.exports = productdetail;