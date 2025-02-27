const db = require('../config/db')

const RollCall = {
    getAll: (callback) => {
        db.query('SELECT * FROM diem_danh', callback)
    },
    

    add: (faculty, callback) => {
        const { thoi_gian, id_lich_hoc, id_sinh_vien } = faculty
        db.query(`INSERT INTO diem_danh(thoi_gian, id_lich_hoc, id_sinh_vien) 
                    VALUES (?,?,?)
                `
            , [thoi_gian, id_lich_hoc, id_sinh_vien], callback)
    },

    delete: (id, callback) => {
        db.query(`DELETE FROM diem_danh WHERE id_diem_danh = ?`, [id], callback)
    },

    update: (id, faculty, callback) => {
        const { thoi_gian, id_lich_hoc, id_sinh_vien } = faculty
        const query = `UPDATE diem_danh 
                 SET thoi_gian = ?, id_lich_hoc = ?, id_sinh_vien = ? 
                 WHERE id_diem_danh = ?`;
        db.query(query, [thoi_gian, id_lich_hoc, id_sinh_vien, id], callback);
    },

    getById: (id, callback) => {
        db.query(`SELECT * FROM diem_danh WHERE id_diem_danh = ?`, [id], callback);
    }
}

module.exports = RollCall