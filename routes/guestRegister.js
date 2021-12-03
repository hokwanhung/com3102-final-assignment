const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Guest = require('../models/guest');
const unauthenticated = require('../passport/unauthenticated');

router.get('/', unauthenticated, (req, res) => {
    res.render('guestRegister', {
        // '../views/layouts/default'
        layout: false,
        message: req.flash('registration_err')
    });
});

router.post('/', unauthenticated, async (req, res) => {
    if (req.body.password !== req.body.r_password) {
        req.flash('registration_err', 'Mismatched password. Please enter the same password twice.');
        return res.redirect('/guestRegister');
    }
    try {
        const guestExist = await Guest.findOne({ username: req.body.username });
        if (guestExist) {
            req.flash('registration_err', 'Username already exists.');
            return res.redirect('/guestRegister');
        }
        const hash = await bcrypt.hash(req.body.password, 10);
        const newGuest = new Guest({
            username: req.body.username,
            password: hash
        });
        await newGuest.save();
        res.redirect('/login');
    } catch (e) {
        console.log('Status 400: ' + e.message);
        res.redirect('/guestRegister');
    }
});

module.exports = router;