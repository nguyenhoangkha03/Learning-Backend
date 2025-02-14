const db = require('../config/db')

const Sinhvien = {
    getAll: (callback) => {
        db.query('SELECT * FROM sinhvien', callback)
    },
    

    add: (sinhVien, callback) => {
        const { mssv, ho_ten, ngay_sinh, gioi_tinh, dia_chi, email, sdt, id_lop } = sinhVien
        db.query(`INSERT INTO sinh_vien(mssv, ho_ten, 
                    ngay_sinh, gioi_tinh, dia_chi, email, sdt, id_lop) 
                    VALUES (?,?,?,?,?,?,?,?)
                `
            , [mssv, ho_ten, ngay_sinh, gioi_tinh, dia_chi, email, sdt, id_lop], callback)
    }
}