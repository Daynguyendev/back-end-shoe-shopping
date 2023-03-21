const sql = require("../db");
class khach_hang {
    constructor(user) {
        this.ten_khach_hang = user.ten_khach_hang;
        this.email_khach_hang = user.email_khach_hang;
        this.ngay_sinh_khach_hang = user.ngay_sinh_khach_hang;
        this.ngay_tao_tai_khoan = new Date();
        this.mat_khau_khach_hang = user.mat_khau_khach_hang;
        this.chuc_vu = user.chuc_vu;

    }
}


khach_hang.create = (newUser, result) => {
    sql.query("INSERT INTO khach_hang SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created user: ", { id_khach_hang: res.insertId, ...newUser });
        result(null, { id_khach_hang: res.insertId, ...newUser });
    });
};

// khach_hang.findByEmail = (email_khach_hang, result) => {
//     sql.query(`SELECT * from khach_hang WHERE email_khach_hang = ?`, email_khach_hang, (err, res) => {
//         if (err) {
//             result(err, null);
//             return;
//         }
//         if (res.length) {
//             result(null, res[0])
//             return;
//         }
//         result(null, null);
//     });
// }

khach_hang.findByEmail = (email_khach_hang, callBack) => {
    sql.query("SELECT * from khach_hang WHERE email_khach_hang = ?", email_khach_hang, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res[0]);
    });
};

khach_hang.verify = (email_khach_hang, result) => {
    sql.query(
        "UPDATE khach_hang SET ngay_tao_tai_khoan = ? WHERE email_khach_hang = ?",
        [new Date(), email_khach_hang],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { email_khach_hang: email_khach_hang });
        }
    );
}
khach_hang.getAllemail = (result) => {
    sql.query("SELECT email_khach_hang from khach_hang WHERE 1", (error, results, fields) => {
        if (error) {
            console.log(error);
            return;
        }
        result(null, results);
    }
    )
};


khach_hang.resetPassword = (email_khach_hang, mat_khau_khach_hang, result) => {
    sql.query(
        "UPDATE khach_hang SET mat_khau_khach_hang = ? WHERE email_khach_hang = ?",
        [mat_khau_khach_hang, email_khach_hang],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { email_khach_hang: email_khach_hang });
        }
    );
};


khach_hang.updateToken = (token, email_khach_hang, callBack) => {
    sql.query(
        `UPDATE khach_hang SET token= ? WHERE email_khach_hang = ?;`,
        [
            token,
            email_khach_hang,

        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};

khach_hang.getIdbyEmail = (data, callBack) => {
    sql.query("SELECT id_khach_hang FROM khach_hang WHERE email_khach_hang = ? ", [data.email_khach_hang], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

khach_hang.remove = (id_khach_hang, callBack) => {
    sql.query("DELETE FROM khach_hang WHERE id_khach_hang = ?", id_khach_hang, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};


khach_hang.update = (data, callBack) => {
    console.log(data)
    sql.query(
        `UPDATE khach_hang SET chuc_vu=? WHERE id_khach_hang = ?;`,
        [
            data.chuc_vu,
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

khach_hang.getAll = (data, callBack) => {
    sql.query("SELECT * FROM khach_hang Where 1;", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

khach_hang.getStatis = (data, callBack) => {
    sql.query("SELECT * FROM chi_tiet_sp INNER JOIN chi_tiet_hd_nhap ON chi_tiet_sp.id_sp = chi_tiet_hd_nhap.id_sp and chi_tiet_sp.id_mau_sac = chi_tiet_hd_nhap.id_mau_sac and chi_tiet_sp.id_kich_thuoc = chi_tiet_hd_nhap.id_kich_thuoc INNER JOIN mau_sac ON chi_tiet_hd_nhap.id_mau_sac = mau_sac.id_mau_sac INNER JOIN kich_thuoc ON chi_tiet_hd_nhap.id_kich_thuoc = kich_thuoc.id_kich_thuoc WHERE 1; ", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};








module.exports = khach_hang;


