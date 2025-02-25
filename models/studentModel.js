const db = require('../config/db')

const Student = {
    getAll: (callback) => {
        db.query('SELECT * FROM sinh_vien', callback)
    },
    

    add: (sinhVien, callback) => {
        const { mssv, ho_ten, ngay_sinh, gioi_tinh, dia_chi, email, sdt, id_lop, imageBuffer } = sinhVien
        db.query(`INSERT INTO sinh_vien(mssv, ho_ten, 
                    ngay_sinh, gioi_tinh, dia_chi, email, sdt, id_lop, image) 
                    VALUES (?,?,?,?,?,?,?,?,?)
                `
            , [mssv, ho_ten, ngay_sinh, gioi_tinh, dia_chi, email, sdt, id_lop, imageBuffer], callback)
    },

    delete: (id, callback) => {
        db.query(`DELETE FROM sinh_vien WHERE id_sinh_vien = ?`, [id], callback)
    },

    update: (id, student, callback) => {
        const { mssv, ho_ten, ngay_sinh, gioi_tinh, dia_chi, email, sdt, id_lop, imageBuffer } = student
        const query = `UPDATE sinh_vien 
                 SET mssv = ?, ho_ten = ?, ngay_sinh = ?, gioi_tinh = ?, dia_chi = ?, email = ?, sdt = ?, id_lop = ?, image = ?
                 WHERE id_sinh_vien = ?`;
        db.query(query, [mssv, ho_ten, ngay_sinh, gioi_tinh, dia_chi, email, sdt, id_lop, imageBuffer, id], callback);
    },

    getById: (id, callback) => {
        db.query(`SELECT * FROM sinh_vien WHERE id_sinh_vien = ?`, [id], callback);
    },

    getByMSSV: (mssv, callback) => {
        db.query(`SELECT * FROM sinh_vien WHERE mssv = ?`, [mssv], callback);
    }
}

module.exports = Student