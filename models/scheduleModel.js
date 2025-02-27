const db = require('../config/db')

const Schedule = {
    getAll: (callback) => {
        db.query('SELECT * FROM lich_hoc', callback)
    },
    

    add: (schedule, callback) => {
        const { ngay, session, so_tiet, tu_tiet, den_tiet, id_lop_hoc_phan, id_lop, loai } = schedule
        db.query(`INSERT INTO lich_hoc(ngay, session, so_tiet, tu_tiet, den_tiet, id_lop_hoc_phan, id_lop, loai) 
                    VALUES (?,?,?,?,?,?,?,?)
                `
            , [ngay, session, so_tiet, tu_tiet, den_tiet, id_lop_hoc_phan, id_lop, loai], callback)
    },

    delete: (id, callback) => {
        db.query(`DELETE FROM lich_hoc WHERE id_lich_hoc = ?`, [id], callback)
    },

    update: (id, schedule, callback) => {
        const { ngay, session, so_tiet, tu_tiet, den_tiet, id_lop_hoc_phan, id_lop, loai } = schedule
        const query = `UPDATE lich_hoc 
                 SET ngay = ?, session = ?, so_tiet = ?, tu_tiet = ?, den_tiet = ? , id_lop_hoc_phan = ?, id_lop = ?, loai = ?
                 WHERE id_lich_hoc = ?`;
        db.query(query, [ngay, session, so_tiet, tu_tiet, den_tiet, id_lop_hoc_phan, id_lop, loai, id], callback);
    },

    getById: (id, callback) => {
        db.query(`SELECT * FROM lich_hoc WHERE id_lich_hoc = ?`, [id], callback)
    },

    getAllJoinByIdClass: (id, callback) => {
        db.query(`SELECT id_mon_hoc, lich_hoc.id_lop, lich_hoc.id_lop_hoc_phan, loai, session, so_tiet, tu_tiet, den_tiet, id_phong, id_giang_vien, ngay
                    FROM lich_hoc JOIN lop_hoc_phan 
                    ON lich_hoc.id_lop_hoc_phan = lop_hoc_phan.id_lop_hoc_phan 
                    WHERE lich_hoc.id_lop = ?`, [id], callback)
    },

    getAllByIdClassAndDateNow: (id, callback) => {
        const today = new Date()
        db.query(`SELECT *
                    FROM lich_hoc
                    WHERE id_lop = ? and ngay = ?`, [id, today], callback)
    }
}

module.exports = Schedule