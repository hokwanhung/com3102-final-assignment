// Import required dependencies.
const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const authenticated = require('../passport/authenticated');

// When a GET request is sent to the endpoint '/create',
// "authenticated.js" is used as middleware in this router - 
// if the user fails, might be redirected to another URL written in "authenticated.js".
router.get('/create', authenticated, async (req, res) => {
    try {
        res.render('course/create', {
            // Render the 'course/create' view, and pass an object with properties below to the view.
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

// When a POST request is sent to the endpoint '/',
// and the user wants to create a new course.
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

    // Create a new instance of the 'Course' model using data from the request body.
    const course = new Course({
        code: req.body.code,
        name: req.body.name,
        GPA: dict[req.body.GPA]
    });
    try {
        // Save the data to the database.
        // As MongoDB is schema-less, both the collection and structure are not required before usage,
        // which means the collection "courses" would be automatically created if it is not yet created.
        await course.save();
        res.redirect('/');
    } catch (e) {
        console.log('idea post error: ' + e.message);
        req.flash('err', 'Cannot add this course.');
        res.redirect('course/create');
    }
});

// The router object is exported for availabling uses in other parts.
module.exports = router;