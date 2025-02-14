const express = require('express')
const router = express.Router()
const sinhvienController = require('../controllers/sinhvienController')

router.get('/student', sinhvienController.getAllStudents)
router.post('/student', sinhvienController.addStudent)

module.exports = router