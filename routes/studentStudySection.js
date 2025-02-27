const express = require('express')
const router = express.Router()
const studentStudySectionController = require('../controllers/studentStudySectionController')

router.get('/list', studentStudySectionController.getAllStudentStudySections)
router.post('/add', studentStudySectionController.addStudentStudySection)
router.delete('/delete/:id', studentStudySectionController.deleteStudentStudySection)
router.put('/update/:id', studentStudySectionController.updateStudentStudySection)
router.get('/:id', studentStudySectionController.getStudentStudySectionById)

module.exports = router