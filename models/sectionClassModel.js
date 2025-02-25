const db = require('../config/db')

const SectionClass = {
    getAll: (callback) => {
        db.query('SELECT * FROM lop_hoc_phan', callback)
    },
    

    add: (classs, callback) => {
        const { ms_lop_hoc_phan, id_mon_hoc, id_giang_vien, id_phong, id_hoc_ky, tong_so_tiet, tong_so_tiet_th, trang_thai, hoc_phi } = classs
        db.query(`INSERT INTO lop_hoc_phan(ms_lop_hoc_phan, id_mon_hoc, id_giang_vien, id_phong, id_hoc_ky, tong_so_tiet, tong_so_tiet_th, trang_thai, hoc_phi) 
                    VALUES (?,?,?,?,?,?,?,?,?)
                `
            , [ms_lop_hoc_phan, id_mon_hoc, id_giang_vien, id_phong, id_hoc_ky, tong_so_tiet, tong_so_tiet_th, trang_thai, hoc_phi], callback)
    },

    delete: (id, callback) => {
        db.query(`DELETE FROM lop_hoc_phan WHERE id_lop_hoc_phan = ?`, [id], callback)
    },

    update: (id, classs, callback) => {
        const { ms_lop_hoc_phan, id_mon_hoc, id_giang_vien, id_phong, id_hoc_ky, tong_so_tiet, tong_so_tiet_th, trang_thai, hoc_phi } = classs
        const query = `UPDATE lop_hoc_phan 
                 SET ms_lop_hoc_phan = ?, id_mon_hoc = ?, id_giang_vien = ?, id_phong = ?, id_hoc_ky = ?, tong_so_tiet = ?, tong_so_tiet_th = ?, trang_thai = ?, hoc_phi = ? 
                 WHERE id_lop_hoc_phan = ?`;
        db.query(query, [ms_lop_hoc_phan, id_mon_hoc, id_giang_vien, id_phong, id_hoc_ky, tong_so_tiet, tong_so_tiet_th, trang_thai, hoc_phi, id], callback);
    },

    getById: (id, callback) => {
        db.query(`SELECT * FROM lop_hoc_phan WHERE id_lop_hoc_phan = ?`, [id], callback);
    },

    getAllByIdSemester: (id, callback) => {
        db.query(`SELECT * FROM lop_hoc_phan WHERE id_hoc_ky = ?`, [id], callback);
    },

    getAllJoinByIdSemesterAndIdStudent: (id, callback) => {
        const { idSemester, idStudent } = id
        console.log(idSemester, idStudent)
        db.query(`SELECT * FROM lop_hoc_phan INNER JOIN sv_hoc_hp 
                    ON lop_hoc_phan.id_lop_hoc_phan = sv_hoc_hp.id_lop_hoc_phan
                    WHERE id_hoc_ky = ? AND id_sinh_vien = ?`, [idSemester, idStudent], callback);
    }
}

module.exports = SectionClass