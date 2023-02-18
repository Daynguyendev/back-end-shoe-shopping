const sql = require("../db");
class image {
    constructor(item) {
        this.id_hinh_anh_ct = item.id_hinh_anh_ct;
        this.link_hinh_anh_ct = item.link_hinh_anh_ct;
    }
}

image.create = (data, callBack) => {
    sql.query(`INSERT INTO hinh_anh_chi_tiet SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

image.remove = (data, callBack) => {
    sql.query("DELETE FROM hinh_anh_chi_tiet WHERE id_hinh_anh_ct = ?", [data.id_hinh_anh_ct], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

image.getByID = (id_hinh_anh_ct, callBack) => {
    sql.query(`SELECT * FROM hinh_anh_chi_tiet WHERE id_hinh_anh_ct = ?`, [id_hinh_anh_ct], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }

        callBack(null, res);
    });
};


module.exports = image;