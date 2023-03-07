const sql = require("../db");
class image {
    constructor(item) {
        this.id_hinh_anh = item.id_hinh_anh;
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
    sql.query("DELETE FROM hinh_anh_chi_tiet WHERE id_hinh_anh = ?", [data.id_hinh_anh], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

image.getByID = (id_hinh_anh, callBack) => {
    sql.query(`SELECT * FROM hinh_anh_chi_tiet WHERE id_hinh_anh = ?`, [id_hinh_anh], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }

        callBack(null, res);
    });
};

image.get = (data, callBack) => {
    console.log('data toi ko ', data)
    sql.query("SELECT * FROM hinh_anh_chi_tiet WHERE 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

image.update = (data, callBack) => {
    sql.query(
        `UPDATE hinh_anh_chi_tiet SET id_hinh_anh= ?, link_hinh_anh_ct =?  WHERE id_anh = ?;`,
        [
            data.id_hinh_anh,
            data.link_hinh_anh_ct,
            data.id_anh,

        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};



module.exports = image;