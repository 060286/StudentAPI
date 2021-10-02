const Student = require('../models/Student');
const validator = require('validator');
const fs = require('fs');

var listStudentDefault = JSON.parse(Student.getListStudent);

exports.getListStudent = async (req, res, next) => {
    try {
        const students = await listStudentDefault;

        if (students.length === 0) {
            res.status(404).json(
                {
                    success: false,
                    result: students.length,
                    data: students
                }
            );
        }

        res.status(200).json({
            success: true,
            result: students.length,
            data: students
        })
    }
    catch (e) {
        throw e.message;
    }
}

// get by email
exports.getStudentByEmail = async (req, res, next) => {
    try {
        const students = listStudentDefault;
        const studentsJSON = JSON.parse(students);
        const student = studentsJSON.filter((e) => {
            return e.email === req.params.email;
        });

        if (!validator.isEmail(req.params.email)) {
            res.status(404).json({
                success: false,
                message: 'Params must be email'
            });
        }

        if (!student) {
            res.status(404).json({
                success: false,
                result: student.length,
                data: 'Student is not found'
            });
        }

        res.status(200).json({
            success: true,
            result: student.length,
            data: student
        });
    }
    catch (e) {
        throw e.message;
    }
}

// add new element
exports.addStudent = async (req, res, next) => {
    try {
        const student = req.body;

        if (!student) {
            res.status(404).json({
                success: false,
                message: 'Data is invalid'
            });
        }

        if (!validator.isEmail(student.email)) {
            res.status(404).json({
                success: false,
                message: 'Email is invalid'
            });
        }

        listStudentDefault.push(student);

        res.status(200).json({
            success: true,
            result: student.length,
            data: student
        });
    }
    catch (e) {
        throw e.message;
    }
}

// delete by email
exports.deleteStudent = async (req, res, next) => {
    const email = req.params.email;
    if (!validator.isEmail(email)) {
        res.status(404).json({
            success: false,
            message: 'Params must be email'
        });
    }

    listStudentDefault = listStudentDefault.filter((student) => {
        return student.email !== email;
    })

    console.log(listStudentDefault);

    res.status(200).json({
        success: true,
        message: 'Delete success'
    });
}