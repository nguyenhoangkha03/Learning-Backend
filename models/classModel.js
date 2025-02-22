const db = require('../config/db')

const Classs = {
    getAll: (callback) => {
        db.query('SELECT * FROM lop', callback)
    },
    

    add: (classs, callback) => {
        const { ten_lop, khoa, so_luong_sv, nam, id_khoa } = classs
        db.query(`INSERT INTO lop(ten_lop, khoa, so_luong_sv, nam, id_khoa) 
                    VALUES (?,?,?,?,?)
                `
            , [ten_lop, khoa, so_luong_sv, nam, id_khoa], callback)
    },

    delete: (id, callback) => {
        db.query(`DELETE FROM lop WHERE id_lop = ?`, [id], callback)
    },

    update: (id, classs, callback) => {
        const { ten_lop, khoa, so_luong_sv, nam, id_khoa } = classs
        const query = `UPDATE lop 
                 SET ten_lop = ?, khoa = ?, so_luong_sv = ?, nam = ?, id_khoa = ? 
                 WHERE id_lop = ?`;
        db.query(query, [ten_lop, khoa, so_luong_sv, nam, id_khoa, id], callback);
    },

    getById: (id, callback) => {
        db.query(`SELECT * FROM lop WHERE id_lop = ?`, [id], callback);
    }
}

module.exports = Classs