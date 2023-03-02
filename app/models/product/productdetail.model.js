const sql = require("../db");
class productdetail {
    constructor(bill) {
        this.id_sp = bill.id_sp;
        this.ten_mau_sac = bill.ten_mau_sac;
        this.ten_kich_thuoc = bill.ten_kich_thuoc;
        this.so_luong = bill.so_luong;
    }
}

productdetail.create = (data, callBack) => {
    sql.query(`INSERT INTO chi_tiet_sp  SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

productdetail.remove = (data, callBack) => {
    sql.query("DELETE FROM chi_tiet_sp WHERE id_sp  = ?", [data.id_sp], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};



productdetail.getById = (id_sp, callBack) => {
    sql.query("SELECT * FROM chi_tiet_sp WHERE id_sp = ? ", [id_sp], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);

    });
};

// productdetail.getByIdSpColor = (id_sp, id_mau_sac, callBack) => {
//     sql.query("SELECT * FROM chi_tiet_sp WHERE id_sp = ? and id_mau_sac = ?", [id_sp, id_mau_sac], (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             callBack(err, null);
//             return;
//         }
//         callBack(null, res);

//     });
// };

// productdetail.getByIdSpSize = (id_sp, id_kich_thuoc, callBack) => {
//     sql.query("SELECT * FROM chi_tiet_sp WHERE id_sp = ? and id_kich_thuoc = ?", [id_sp, id_kich_thuoc], (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             callBack(err, null);
//             return;
//         }
//         callBack(null, res);

//     });
// };

// productdetail.getByIdSpColorSize = (id_sp, id_kich_thuoc, id_mau_sac, callBack) => {
//     sql.query("SELECT * FROM chi_tiet_sp WHERE id_sp = ? and id_mau_sac=? and id_kich_thuoc = ? ", [id_sp, id_mau_sac, id_kich_thuoc], (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             callBack(err, null);
//             return;
//         }
//         callBack(null, res);

//     });
// };

productdetail.update = (data, callBack) => {
    sql.query(
        `UPDATE chi_tiet_sp SET id_mau_sac = ?, id_kich_thuoc=? , so_luong=? WHERE id_sp = ?;`,
        [
            data.ten_mau_sac,
            data.ten_kich_thuoc,
            data.so_luong,
            data.id_sp,

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