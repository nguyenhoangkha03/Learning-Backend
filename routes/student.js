const express = require('express')
const multer = require('multer')
const router = express.Router()
const studentController = require('../controllers/studentController')

const storage = multer.memoryStorage()
const upload = multer({ storage })

router.get('/list', studentController.getAllStudents)
router.post('/add', upload.single('image'), studentController.addStudent)
router.delete('/delete/:id', studentController.deleteStudent)
router.put('/update/:id', upload.single('image'), studentController.updateStudent)
router.get('/:id', studentController.getStudentById)

module.exports = router