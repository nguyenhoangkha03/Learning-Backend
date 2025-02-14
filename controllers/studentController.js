const Sinhvien = require('../models/studentModel')

exports.getAllStudents = (req, res) => {
    Sinhvien.getAll((err, result) => {
        if(err) return res.status(500).json({ error: err.message })
        res.json(result)
    })
}

exports.addStudent = (req, res) => {
    const newStudent = req.body
    Sinhvien.add(newStudent, (err, result) => {
        if(err) return res.status(500).json({ error: err.message })
        res.json({ message: 'Add new student successfully', id: result.insertId})
    })
}