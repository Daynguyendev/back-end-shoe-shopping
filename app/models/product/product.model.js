const sql = require("../db");
class product {
    constructor(item) {
        this.ten_sp = item.ten_sp;
        this.gia_sp = item.gia_sp;
        this.thong_tin_sp = item.thong_tin_sp;
        this.id_hinh_anh = item.id_hinh_anh;
        this.id_thuong_hieu = item.id_thuong_hieu;
        this.id_loai_sp = item.id_loai_sp;
        this.hinh_anh_chinh = item.hinh_anh_chinh;

    }
}

product.create = (data, callBack) => {
    sql.query(`INSERT INTO san_pham SET ? `, data, (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
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
    sql.query("SELECT * FROM san_pham WHERE 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            callBack(err, null);
            return;
        }
        callBack(null, res);
    });
};

product.getByIDImage = (id_hinh_anh, callBack) => {
    sql.query(" SELECT * FROM san_pham INNER JOIN thuong_hieu ON san_pham.id_thuong_hieu = thuong_hieu.id_thuong_hieu WHERE id_hinh_anh =?", [id_hinh_anh], (err, res) => {
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
    sql.query(" SELECT * FROM san_pham INNER JOIN thuong_hieu On san_pham.id_thuong_hieu = thuong_hieu.id_thuong_hieu WHERE thuong_hieu.ten_thuong_hieu = ?", [ten_thuong_hieu], (err, res) => {
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
    sql.query(" SELECT * FROM san_pham INNER JOIN loai_sp On san_pham.id_loai_sp = loai_sp.id_loai_sp WHERE loai_sp.id_loai_sp = ?", [id_loai_sp], (err, res) => {
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
        `UPDATE san_pham SET ten_sp = ?, gia_sp = ?, thong_tin_sp=? , id_hinh_anh=?, id_thuong_hieu = ?, id_loai_sp = ?, hinh_anh_chinh=? WHERE id_sp = ?;`,
        [
            data.ten_sp,
            data.gia_sp,
            data.thong_tin_sp,
            data.id_hinh_anh,
            data.id_thuong_hieu,
            data.id_loai_sp,
            data.hinh_anh_chinh,
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