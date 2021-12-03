const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const authenticated = require('../passport/authenticated');

// Get the thing user searched
router.get('/', authenticated, async (req, res) => {
    let courseSearchOptions = {};
    if (req.query.search != null && req.query.search !== '') {
        // RegExp is regular expression -> allows search by keywords & 'i' means case insensitive
        courseSearchOptions.code = new RegExp(req.query.search, 'i', 'g');
    }
    try {
        const course = await Course.find(courseSearchOptions);
        let username;
        if (req.user.studentID) {
            username = req.user.studentID;
        } else {
            username = req.user.username;
        }
        res.render('search', {
            course: course,
            searchOptions: req.query.search,
            username: username
        });
    } catch (e) {
        console.log('Search Error: ' + e.message);
        res.redirect('/');
    }
});

module.exports = router;