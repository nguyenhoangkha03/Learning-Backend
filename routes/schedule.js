const express = require('express')
const router = express.Router()
const scheduleController = require('../controllers/scheduleController')


router.get('/list', scheduleController.getAllSchedules)
router.post('/add', scheduleController.addSchedule)
router.delete('/delete/:id', scheduleController.deleteSchedule)
router.put('/update/:id', scheduleController.updateSchedule)
router.get('/:id', scheduleController.getScheduleById)
router.get('/class/:id', scheduleController.getJoinAllSchedulesByIdClass)
router.get('/class/date/:id', scheduleController.getAllScheduleByIdClassAndDateNow)

module.exports = router