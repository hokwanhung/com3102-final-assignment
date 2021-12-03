const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const bcrypt = require('bcrypt');
const unauthenticated = require('../passport/unauthenticated');

router.get('/', unauthenticated, (req, res) => {
    res.render('studentRegister', {
        //'../views/layouts/default'
        layout: false,
        message: req.flash('registration_err')
    });
});

router.post('/', unauthenticated, async (req, res) => {
    try {
        if (req.body.password !== req.body.r_password) {
            req.flash('registration_err', 'Mismatched password. Please enter the same password twice.');
            return res.redirect('/studentRegister');
        }
        const studentExist = await Student.findOne({ username: req.body.username });
        if (studentExist) {
            req.flash('registration_err', 'You are already registered.');
            return res.redirect('/login');
        }
        const hash = await bcrypt.hash(req.body.password, 10);
        const newStudent = new Student({
            studentID: req.body.username,
            program: req.body.program,
            admissionYear: req.body.admissionYear,
            password: hash
        });
        await newStudent.save();
        res.redirect('/login');
    } catch (e) {
        console.log('Status 400: ' + e.message);
        res.redirect('/studentRegister');
    }
});

module.exports = router;