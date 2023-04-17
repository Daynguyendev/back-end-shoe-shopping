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


khach_hang.updatePassword = (mat_khau_khach_hang, email_khach_hang, callBack) => {
    sql.query(
        `UPDATE khach_hang SET mat_khau_khach_hang=? WHERE email_khach_hang = ?;`, [mat_khau_khach_hang, email_khach_hang]
        ,
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
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
    sql.query("SELECT chi_tiet_sp.id_sp, chi_tiet_sp.ten_sp, SUM(chi_tiet_sp.so_luong_kho) AS tong_so_luong_kho FROM chi_tiet_sp GROUP BY chi_tiet_sp.id_sp", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

khach_hang.getBestsaler = (data, callBack) => {
    sql.query("SELECT chi_tiet_sp.id_sp, MAX(chi_tiet_sp.ten_sp) AS ten_sp, MAX(chi_tiet_sp.gia_sp) AS gia_sp, MAX(chi_tiet_sp.hinh_anh_chinh) AS hinh_anh_chinh,MAX(khuyen_mai.ngay_bat_dau) AS ngay_bat_dau,MAX(khuyen_mai.ngay_ket_thuc) AS ngay_ket_thuc,MAX(khuyen_mai.phan_tram_giam) AS phan_tram_giam, MAX(mau_sac.ten_mau_sac) AS ten_mau_sac, MAX(kich_thuoc.ten_kich_thuoc) AS ten_kich_thuoc, SUM(chi_tiet_hd_nhap.so_luong - chi_tiet_sp.so_luong_kho) AS tong_so_luong_ban, SUM((chi_tiet_hd_nhap.so_luong - chi_tiet_sp.so_luong_kho) * (chi_tiet_sp.gia_sp - chi_tiet_hd_nhap.gia_nhap)) AS tong_lai FROM chi_tiet_sp INNER JOIN chi_tiet_hd_nhap ON chi_tiet_sp.id_sp = chi_tiet_hd_nhap.id_sp AND chi_tiet_sp.id_mau_sac = chi_tiet_hd_nhap.id_mau_sac AND chi_tiet_sp.id_kich_thuoc = chi_tiet_hd_nhap.id_kich_thuoc INNER JOIN mau_sac ON chi_tiet_hd_nhap.id_mau_sac = mau_sac.id_mau_sac INNER JOIN kich_thuoc ON chi_tiet_hd_nhap.id_kich_thuoc = kich_thuoc.id_kich_thuoc INNER JOIN khuyen_mai ON chi_tiet_sp.id_khuyen_mai  = khuyen_mai.id_khuyen_mai  RIGHT JOIN san_pham ON san_pham.id_sp = chi_tiet_sp.id_sp  GROUP BY chi_tiet_sp.id_sp ORDER BY SUM(chi_tiet_hd_nhap.so_luong - chi_tiet_sp.so_luong_kho) DESC;", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};









module.exports = khach_hang;


