const sql = require("../db");
class rate {
    constructor(bill) {
        this.id_khach_hang = bill.id_khach_hang;
        this.id_hd_dat = bill.id_hd_dat;
        this.ten_nguoi_danh_gia = bill.ten_nguoi_danh_gia;
        this.noi_dung = bill.noi_dung;
        this.id_sp = bill.id_sp;
        this.hinh_anh_danh_gia = bill.hinh_anh_danh_gia;
        this.so_sao_danh_gia = bill.so_sao_danh_gia;
    }
}

rate.create = (data, callBack) => {
    sql.query(`INSERT INTO danh_gia_sp SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

rate.remove = (data, callBack) => {
    sql.query("DELETE FROM danh_gia_sp WHERE id_danh_gia = ?", [data.id_danh_gia], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};


rate.update = (data, callBack) => {
    console.log(data)
    sql.query(
        `UPDATE danh_gia_sp SET ten_nguoi_danh_gia=? , noi_dung = ?, id_sp = ? ,hinh_anh_danh_gia = ? ,
         so_sao_danh_gia= ? WHERE id_danh_gia = ?;`,
        [
            data.id_khach_hang,
            data.ten_nguoi_danh_gia,
            data.noi_dung,
            data.id_sp,
            data.hinh_anh_danh_gia,
            data.so_sao_danh_gia,
            data.id_danh_gia,



        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};

rate.getAll = (data, callBack) => {

    sql.query("SELECT * FROM danh_gia_sp Where id_sp =?;", data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};





module.exports = rate;