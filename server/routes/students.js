const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// مسارات CRUD للطلاب
router.get('/', studentController.getAllStudents);
router.post('/', studentController.createStudent);
router.get('/:id', studentController.getStudentById);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;