const sql = require("../db");
class image {
    constructor(item) {
        this.id_sp = item.id_sp;
        this.id_mau_sac = item.id_mau_sac;
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
    sql.query("DELETE FROM hinh_anh_chi_tiet WHERE id_anh = ?", [data.id_anh], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

image.getByIDSPIdColor = (id_sp, id_mau_sac, callBack) => {
    sql.query(`SELECT * FROM hinh_anh_chi_tiet WHERE id_sp = ? and id_mau_sac =?`, [id_sp, id_mau_sac], (err, res) => {
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

image.getColorById = (id_sp, callBack) => {
    console.log('datacolor toi ko ', id_sp)
    sql.query("SELECT ten_mau_sac FROM chi_tiet_sp WHERE id_sp = ? ", [id_sp], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

image.getImageById = (id_sp, callBack) => {
    console.log('datacolor toi ko ', id_sp)
    sql.query("SELECT DISTINCT  mau_sac.ten_mau_sac, hinh_anh_chi_tiet.link_hinh_anh_ct, hinh_anh_chi_tiet.id_mau_sac  FROM chi_tiet_sp INNER JOIN mau_sac ON chi_tiet_sp.ten_mau_sac = mau_sac.ten_mau_sac INNER JOIN hinh_anh_chi_tiet ON chi_tiet_sp.id_sp = hinh_anh_chi_tiet.id_sp AND mau_sac.id_mau_sac = hinh_anh_chi_tiet.id_mau_sac WHERE chi_tiet_sp.id_sp =? ", [id_sp], (err, res) => {
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
        `UPDATE hinh_anh_chi_tiet SET id_sp= ?,id_mau_sac=? , link_hinh_anh_ct =?  WHERE id_anh = ?;`,
        [
            data.id_sp,
            data.id_mau_sac,
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