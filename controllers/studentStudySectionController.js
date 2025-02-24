const StudentStudySection = require('../models/studentStudySectionModel')

exports.getAllStudentStudySections = (req, res) => {
    StudentStudySection.getAll((err, result) => {
        if(err) return res.status(500).json({ error: err.message })
        res.json(result)
    })
}

exports.addStudentStudySection = (req, res) => {
    const newSectionClass = req.body
    StudentStudySection.add(newSectionClass, (err, result) => {
        if(err) return res.status(500).json({ error: err.message })
        res.json({ message: 'Add new SectionClass successfully', id: result.insertId})
    })
}

exports.deleteStudentStudySection= (req, res) => {
    const id = req.params.id
    StudentStudySection.delete(id, (err, result) => {
        if(err) return res.status(500).json({ error: err.message })
        res.json({ message: 'Delete a SectionClass successfully', id})
    })
}

exports.updateStudentStudySection = (req, res) => {
    const id = req.params.id
    const newSectionClass = req.body
    StudentStudySection.update(id, newSectionClass, (err, result) => {
        if(err) return res.status(500).json({ error: err.message })
        res.json({ message: 'Update SectionClass successfully', affectedRows: result.affectedRows })
    })
}

exports.getStudentStudySectionById = (req, res) => {
    const id = req.params.id
    StudentStudySection.getById(id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message })
      if (result.length === 0) return res.status(404).json({ message: 'SectionClass not found' })
      res.json(result[0])
    })
}
