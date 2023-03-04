const sql = require("../db");
class detailinvoiceoutput {
    constructor(bill) {
        this.id_sp = bill.id_sp;
        this.id_hd_dat = bill.id_hd_dat;
        this.so_luong = bill.so_luong;
        this.ten_mau_sac = bill.ten_mau_sac;
        this.ten_kich_thuoc = bill.ten_kich_thuoc;
    }
}

detailinvoiceoutput.create = (data, callBack) => {
    sql.query(`INSERT INTO chi_tiet_hd_dat SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

detailinvoiceoutput.remove = (data, callBack) => {
    sql.query("DELETE FROM chi_tiet_hd_dat WHERE id_hd_dat  = ?", [data.id_hd_dat], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};



detailinvoiceoutput.get = (data, callBack) => {
    sql.query("SELECT * FROM chi_tiet_hd_dat WHERE 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

detailinvoiceoutput.getbyId = (data, callBack) => {
    console.log('dô tới k', [data.id_hd_dat])
    sql.query("SELECT * FROM chi_tiet_hd_dat INNER JOIN san_pham ON chi_tiet_hd_dat.id_sp = san_pham.id_sp WHERE id_hd_dat = ? ", [data.id_hd_dat], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};




// detailinvoiceoutput.update = (data, callBack) => {
//     sql.query(
//         `UPDATE chi_tiet_hd_dat SET id_sp=?,  id_hd_dat = ?, so_luong = ?, ten_mau_sac=? , ten_kich_thuoc=? ,
// WHERE id_hd_dat = ?;`,
//         [
//             data.id_sp,
//             data.id_hd_dat,
//             data.so_luong,
//             data.ten_mau_sac,
//             data.ten_kich_thuoc,
//             data.id_hd_dat,
//         ],
//         (error, results, fields) => {
//             if (error) {
//                 callBack(error);
//             }
//             return callBack(null, results);
//         }
//     );
// };








module.exports = detailinvoiceoutput;