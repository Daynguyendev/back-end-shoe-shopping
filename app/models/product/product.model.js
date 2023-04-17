const sql = require("../db");
class product {
    constructor(item) {
        this.ten_sp = item.ten_sp;
        this.gia_sp = item.gia_sp;
        this.thong_tin_sp = item.thong_tin_sp;
        this.id_thuong_hieu = item.id_thuong_hieu;
        this.id_loai_sp = item.id_loai_sp;
        this.hinh_anh_chinh = item.hinh_anh_chinh;
        this.id_khuyen_mai = item.id_khuyen_mai;
    }
}

product.create = (data, callBack) => {
    sql.query(`INSERT INTO san_pham SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res.insertId);
    });
};

product.remove = (id_sp, callBack) => {
    sql.query("DELETE FROM san_pham WHERE id_sp = ?", id_sp, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

product.removeRate = (id_sp, callBack) => {
    sql.query("DELETE FROM danh_gia_sp WHERE id_sp = ?", id_sp, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};


product.get = (data, callBack) => {
    sql.query("SELECT * FROM san_pham INNER JOIN khuyen_mai on san_pham.id_khuyen_mai = khuyen_mai.id_khuyen_mai WHERE 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};


product.getHasPromotion = (data, callBack) => {
    sql.query("SELECT * FROM san_pham INNER JOIN khuyen_mai ON san_pham.id_khuyen_mai = khuyen_mai.id_khuyen_mai WHERE khuyen_mai.ngay_bat_dau  <= CURDATE() AND khuyen_mai.ngay_ket_thuc >= CURDATE()", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};


product.findproduct = (ten_sp, gia_sp, id_thuong_hieu, id_loai_sp, thong_tin_sp, callBack) => {
    sql.query(
        `SELECT * FROM san_pham WHERE ten_sp = ? and gia_sp = ? and id_thuong_hieu=? and id_loai_sp = ? and thong_tin_sp = ? ;`,
        [
            ten_sp,
            gia_sp,
            id_thuong_hieu,
            id_loai_sp,
            thong_tin_sp

        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results[0]);
        }
    );
};


product.getByIDProduct = (id_sp, callBack) => {
    sql.query(" SELECT * FROM san_pham INNER JOIN khuyen_mai ON san_pham.id_khuyen_mai = khuyen_mai.id_khuyen_mai INNER JOIN thuong_hieu ON san_pham.id_thuong_hieu = thuong_hieu.id_thuong_hieu WHERE id_sp =?", [id_sp], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

product.getByNameTradeMark = (ten_thuong_hieu, callBack) => {
    sql.query(" SELECT * FROM san_pham INNER JOIN khuyen_mai ON san_pham.id_khuyen_mai = khuyen_mai.id_khuyen_mai INNER JOIN thuong_hieu On san_pham.id_thuong_hieu = thuong_hieu.id_thuong_hieu WHERE thuong_hieu.ten_thuong_hieu = ?", [ten_thuong_hieu], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

product.getByNameItem = (ten_sp, callBack) => {
    sql.query(" SELECT * FROM san_pham INNER JOIN khuyen_mai ON san_pham.id_khuyen_mai = khuyen_mai.id_khuyen_mai WHERE san_pham.ten_sp = ?", [ten_sp], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

product.getByIdCategory = (id_loai_sp, callBack) => {
    sql.query("SELECT * FROM san_pham INNER JOIN khuyen_mai ON san_pham.id_khuyen_mai = khuyen_mai.id_khuyen_mai INNER JOIN loai_sp On san_pham.id_loai_sp = loai_sp.id_loai_sp WHERE loai_sp.id_loai_sp = ?", [id_loai_sp], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

product.getIdSpByIDImage = (id_hinh_anh, callBack) => {
    sql.query(" SELECT id_sp FROM san_pham WHERE id_hinh_anh =?", [id_hinh_anh], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};


product.getSpByID = (id_sp, callBack) => {
    sql.query(" SELECT * FROM san_pham WHERE id_sp =?", [id_sp.id_sp], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

product.getAll = (option, callBack) => {

    let dbQuery = `SELECT * FROM chi_tiet_sp INNER JOIN khuyen_mai ON chi_tiet_sp.id_khuyen_mai = khuyen_mai.id_khuyen_mai RIGHT JOIN san_pham ON san_pham.id_sp = chi_tiet_sp.id_sp WHERE 1=1 `;

    if (option.product_color && option.product_color != 'null') {
        dbQuery += ` and chi_tiet_sp.id_mau_sac = ${option.product_color} `;
    }
    if (option.product_size && option.product_size != 'null') {
        dbQuery += ` and chi_tiet_sp.id_kich_thuoc = ${option.product_size} `;
    }
    if (option.product_loai && option.product_loai != 'null') {
        dbQuery += ` and chi_tiet_sp.id_loai_sp = ${option.product_loai} `;
    }
    if (option.product_ten) {
        dbQuery += ` and chi_tiet_sp.ten_sp like N'%${option.product_ten}%'`;
    }
    if (option.product_thuonghieu && option.product_thuonghieu != 'null') {
        dbQuery += ` and chi_tiet_sp.id_thuong_hieu = ${option.product_thuonghieu} `;
    }
    if (option.product_khuyenmai && option.product_khuyenmai == 'true') {
        dbQuery += ` and khuyen_mai.ngay_bat_dau <= NOW() and khuyen_mai.ngay_ket_thuc >= NOW() `;
    }
    if (option.product_priceStart > 0 && option.product_priceEnd > 0 || option.product_priceEnd > 0 && option.product_priceStart > 0) {
        dbQuery += ` and IF(khuyen_mai.ngay_bat_dau <= NOW() and khuyen_mai.ngay_ket_thuc >= NOW(),(chi_tiet_sp.gia_sp - chi_tiet_sp.gia_sp * (khuyen_mai.phan_tram_giam / 100)) >=  ${option.product_priceStart} and (chi_tiet_sp.gia_sp - chi_tiet_sp.gia_sp *  (khuyen_mai.phan_tram_giam / 100)) <= ${option.product_priceEnd}, chi_tiet_sp.gia_sp >=  ${option.product_priceStart} and chi_tiet_sp.gia_sp <= ${option.product_priceEnd})  `;
    }
    if (option.isLimit === true) {
        dbQuery += `  GROUP BY chi_tiet_sp.id_sp limit ${option._limit} offset ${option._offset}`;
    }


    sql.query(dbQuery, (error, results, fields) => {
        if (error) {
            callBack(error);
        }
        return callBack(null, results);
    });
};


product.getPagination = (option, callBack) => {
    let dbQuery = `SELECT * FROM chi_tiet_sp INNER JOIN khuyen_mai ON chi_tiet_sp.id_khuyen_mai = khuyen_mai.id_khuyen_mai RIGHT JOIN san_pham ON san_pham.id_sp = chi_tiet_sp.id_sp WHERE 1=1  `;

    if (option.product_color && option.product_color != 'null') {
        dbQuery += ` and chi_tiet_sp.id_mau_sac = ${option.product_color} `;
    }
    if (option.product_size && option.product_size != 'null') {
        dbQuery += ` and chi_tiet_sp.id_kich_thuoc = ${option.product_size} `;
    }
    if (option.product_loai && option.product_loai != 'null') {
        dbQuery += ` and chi_tiet_sp.id_loai_sp = ${option.product_loai} `;
    }
    if (option.product_ten) {
        dbQuery += ` and chi_tiet_sp.ten_sp like N'%${option.product_ten}%'`;
    }
    if (option.product_thuonghieu && option.product_thuonghieu != 'null') {
        dbQuery += ` and chi_tiet_sp.id_thuong_hieu = ${option.product_thuonghieu} `;
    }
    if (option.product_khuyenmai && option.product_khuyenmai == 'true') {
        dbQuery += ` and khuyen_mai.ngay_bat_dau <= NOW() and khuyen_mai.ngay_ket_thuc >= NOW() `;
    }
    if (option.product_priceStart && option.product_priceEnd || option.product_priceEnd && option.product_priceStart) {
        dbQuery += ` and chi_tiet_sp.gia_sp >= ${option.product_priceStart} and chi_tiet_sp.gia_sp <= ${option.product_priceEnd} `;
    }
    if (option.isLimit === true) {
        dbQuery += ` GROUP BY chi_tiet_sp.id_sp `;
    }

    sql.query(dbQuery, (error, results, fields) => {
        if (error) {
            callBack(error);
        }
        return callBack(null, results);
    });
};






product.update = (data, callBack) => {
    sql.query(
        `UPDATE san_pham SET ten_sp = ?, gia_sp = ?, thong_tin_sp=? , id_thuong_hieu = ?, id_loai_sp = ?, hinh_anh_chinh=? ,id_khuyen_mai =? WHERE id_sp = ?;`,
        [
            data.ten_sp,
            data.gia_sp,
            data.thong_tin_sp,
            data.id_thuong_hieu,
            data.id_loai_sp,
            data.hinh_anh_chinh,
            data.id_khuyen_mai,
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

product.updateDetail = (data, callBack) => {
    sql.query(
        `UPDATE chi_tiet_sp SET ten_sp = ?, gia_sp = ?, thong_tin_sp=? , id_thuong_hieu = ?, id_loai_sp = ?, hinh_anh_chinh=? ,id_khuyen_mai =? WHERE id_sp = ?;`,
        [
            data.ten_sp,
            data.gia_sp,
            data.thong_tin_sp,
            data.id_thuong_hieu,
            data.id_loai_sp,
            data.hinh_anh_chinh,
            data.id_khuyen_mai,
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

module.exports = product;