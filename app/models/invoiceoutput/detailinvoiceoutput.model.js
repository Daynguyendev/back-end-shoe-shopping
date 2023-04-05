const sql = require("../db");
class detailinvoiceoutput {
    constructor(bill) {
        this.id_sp = bill.id_sp;
        this.id_hd_dat = bill.id_hd_dat;
        this.so_luong = bill.so_luong;
        this.id_mau_sac = bill.id_mau_sac;
        this.id_kich_thuoc = bill.id_kich_thuoc;
    }
}





detailinvoiceoutput.getAll = (option, callBack) => {
    let dbQuery = `SELECT hd_dat_hang.ngay_lap_hd_dat, SUM(hd_dat_hang.tong_tien - ((chi_tiet_hd_nhap.gia_nhap * chi_tiet_hd_dat.so_luong) + (CEIL(chi_tiet_hd_dat.so_luong / 3) * 30000)) ) AS tong_tien_lai FROM chi_tiet_hd_dat INNER JOIN hd_dat_hang ON chi_tiet_hd_dat.id_hd_dat = hd_dat_hang.id_hd_dat INNER JOIN san_pham ON chi_tiet_hd_dat.id_sp = san_pham.id_sp INNER JOIN chi_tiet_hd_nhap ON chi_tiet_hd_nhap.id_sp = chi_tiet_hd_dat.id_sp  AND chi_tiet_hd_nhap.id_kich_thuoc = chi_tiet_hd_dat.id_kich_thuoc    AND chi_tiet_hd_nhap.id_mau_sac = chi_tiet_hd_dat.id_mau_sac   WHERE hd_dat_hang.id_trang_thai < 4 `;

    if (option.bill_month && option.bill_year) {
        dbQuery += ` and MONTH(hd_dat_hang.ngay_lap_hd_dat) IN (${option.bill_month}) and YEAR(hd_dat_hang.ngay_lap_hd_dat) IN (${option.bill_year}) GROUP BY hd_dat_hang.ngay_lap_hd_dat `;
    }
    else if (option.bill_year) {
        dbQuery = ` SELECT MONTH(hd_dat_hang.ngay_lap_hd_dat) AS thang, SUM(hd_dat_hang.tong_tien - ((chi_tiet_hd_nhap.gia_nhap * chi_tiet_hd_dat.so_luong) + (CEIL(chi_tiet_hd_dat.so_luong / 3) * 30000)) ) AS tong_tien_lai FROM chi_tiet_hd_dat INNER JOIN hd_dat_hang ON chi_tiet_hd_dat.id_hd_dat = hd_dat_hang.id_hd_dat  INNER JOIN san_pham ON chi_tiet_hd_dat.id_sp = san_pham.id_sp INNER JOIN chi_tiet_hd_nhap ON chi_tiet_hd_nhap.id_sp = chi_tiet_hd_dat.id_sp AND chi_tiet_hd_nhap.id_kich_thuoc = chi_tiet_hd_dat.id_kich_thuoc
         AND chi_tiet_hd_nhap.id_mau_sac = chi_tiet_hd_dat.id_mau_sac WHERE hd_dat_hang.id_trang_thai < 4 AND YEAR(hd_dat_hang.ngay_lap_hd_dat) IN (${option.bill_year}) GROUP BY thang
        `;
    }
    else if (option.bill_everyYear) {
        dbQuery = ` SELECT YEAR(hd_dat_hang.ngay_lap_hd_dat) AS nam, SUM(hd_dat_hang.tong_tien - ((chi_tiet_hd_nhap.gia_nhap * chi_tiet_hd_dat.so_luong) + (CEIL(chi_tiet_hd_dat.so_luong / 3) * 30000)) ) AS tong_tien_lai FROM chi_tiet_hd_dat INNER JOIN hd_dat_hang ON chi_tiet_hd_dat.id_hd_dat = hd_dat_hang.id_hd_dat  INNER JOIN san_pham ON chi_tiet_hd_dat.id_sp = san_pham.id_sp INNER JOIN chi_tiet_hd_nhap ON chi_tiet_hd_nhap.id_sp = chi_tiet_hd_dat.id_sp AND chi_tiet_hd_nhap.id_kich_thuoc = chi_tiet_hd_dat.id_kich_thuoc  AND chi_tiet_hd_nhap.id_mau_sac = chi_tiet_hd_dat.id_mau_sac WHERE hd_dat_hang.id_trang_thai < 4 AND YEAR(hd_dat_hang.ngay_lap_hd_dat) GROUP BY nam;`
    }
    sql.query(dbQuery, (error, results, fields) => {
        console.log('test db', dbQuery)
        if (error) {
            callBack(error);
        }
        return callBack(null, results);
    });
};



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
    sql.query("SELECT mau_sac.ten_mau_sac , kich_thuoc.ten_kich_thuoc, chi_tiet_hd_dat.id_sp, chi_tiet_hd_dat.so_luong, chi_tiet_hd_dat.id_mau_sac, chi_tiet_hd_dat.id_kich_thuoc, chi_tiet_sp.ten_sp, chi_tiet_sp.hinh_anh_chinh  FROM chi_tiet_hd_dat INNER JOIN chi_tiet_sp ON chi_tiet_hd_dat.id_sp = chi_tiet_sp.id_sp and chi_tiet_hd_dat.id_mau_sac = chi_tiet_sp.id_mau_sac and chi_tiet_hd_dat.id_kich_thuoc = chi_tiet_sp.id_kich_thuoc  INNER JOIN mau_sac ON chi_tiet_sp.id_mau_sac = mau_sac.id_mau_sac  INNER JOIN kich_thuoc ON chi_tiet_sp.id_kich_thuoc = kich_thuoc.id_kich_thuoc WHERE chi_tiet_hd_dat.id_hd_dat= ?;  ", [data.id_hd_dat], (err, res) => {
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
//         `UPDATE chi_tiet_hd_dat SET id_sp=?,  id_hd_dat = ?, so_luong = ?, id_mau_sac=? , id_kich_thuoc=? ,
// WHERE id_hd_dat = ?;`,
//         [
//             data.id_sp,
//             data.id_hd_dat,
//             data.so_luong,
//             data.id_mau_sac,
//             data.id_kich_thuoc,
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


// SELECT hd_dat_hang.ngay_lap_hd_dat, SUM(hd_dat_hang.tong_tien) AS tong_tien
// FROM chi_tiet_hd_dat
// INNER JOIN hd_dat_hang ON chi_tiet_hd_dat.id_hd_dat = hd_dat_hang.id_hd_dat
// INNER JOIN san_pham ON chi_tiet_hd_dat.id_sp = san_pham.id_sp
// WHERE 1
// GROUP BY hd_dat_hang.ngay_lap_hd_dat





module.exports = detailinvoiceoutput;