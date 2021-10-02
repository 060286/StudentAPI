const express = require('express');
const router = express.Router();

const { getListStudent, getStudentByEmail, addStudent, deleteStudent } = require('../controler/studentController');

router.route('/students').get(getListStudent);
router.route('/student/:email').get(getStudentByEmail);
router.route('/student').post(addStudent);
router.route('/student/:email').delete(deleteStudent);

module.exports = router;