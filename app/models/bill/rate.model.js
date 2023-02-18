const sql = require("../db");
class rate {
    constructor(bill) {
        this.id_hd_dat = bill.id_hd_dat;
        this.noi_dung = bill.noi_dung;
        this.id_mau_sac = bill.id_mau_sac;
        this.id_kich_thuoc = bill.id_kich_thuoc;
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



module.exports = rate;