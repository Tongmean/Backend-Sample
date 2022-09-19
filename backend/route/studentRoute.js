const express = require('express');
const studentController = require('../controller/studentController');
const router = express();

router.get('/student', studentController.getStudent);

router.get('/student/:id', studentController.getStudentById)

module.exports = router;