const express = require('express')
const router = express.Router()
const sectionClassController = require('../controllers/sectionClassController')

router.get('/list', sectionClassController.getAllSectionClasses)
router.post('/add', sectionClassController.addSectionClass)
router.delete('/delete/:id', sectionClassController.deleteSectionClass)
router.put('/update/:id', sectionClassController.updateSectionClass);
router.get('/:id', sectionClassController.getSectionClassById);

module.exports = router