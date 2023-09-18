// Import required dependencies.
const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const authenticated = require('../passport/authenticated');

router.get('/create', authenticated, async (req, res) => {
    try {
        res.render('course/create', {
            // '../views/layouts/default'
            layout: false,
            course: new Course(),
            message: req.flash('err')
        });
    } catch (e) {
        console.log(e.message);
        res.redirect('/');
    }
});

router.post('/', async (req, res) => {
    let dict = {
        "A": 4.0,
        "A-": 3.7,
        "B+": 3.3,
        "B": 3.0,
        "B-": 2.7,
        "C+": 2.3,
        "C": 2.0,
        "C-": 1.7,
        "D+": 1.3,
        "D": 1,
        "F": 0
    }

    const course = new Course({
        code: req.body.code,
        name: req.body.name,
        GPA: dict[req.body.GPA]
    });
    try {
        await course.save();
        res.redirect('/');
    } catch (e) {
        console.log('idea post error: ' + e.message);
        req.flash('err', 'Cannot add this course.');
        res.redirect('course/create');
    }
});

module.exports = router;