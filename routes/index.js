const express = require('express');
const router = express.Router();
const authenticated = require('../passport/authenticated');

router.get('/', authenticated, (req, res) => {
    if (!req.user.username) {
        // student login
        res.render('index', {
            layout: 'layouts/stuLayout',
            username: req.user.studentID
        });
    } else {
        // guest login
        res.render('index', {
            username: req.user.username
        });
    }
});

module.exports = router;