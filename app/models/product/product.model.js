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

product.remove = (data, callBack) => {
    sql.query("DELETE FROM san_pham WHERE id_sp = ?", [data.id_sp], (err, res) => {
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
    console.log('data cua findproductnew', ten_sp, gia_sp, id_thuong_hieu, id_loai_sp, thong_tin_sp)
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
            console.log('resuafinnew', results);
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
    console.log(ten_thuong_hieu)
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
    console.log(ten_sp)
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
    console.log('model', id_loai_sp)
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
    console.log('id_spp', id_sp)
    sql.query(" SELECT * FROM san_pham WHERE id_sp =?", [id_sp.id_sp], (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
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






module.exports = product;