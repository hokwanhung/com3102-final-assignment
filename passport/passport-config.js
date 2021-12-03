const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Student = require('../models/student');
const Guest = require('../models/guest');

function initialize(passport) {
    const authenticateUser = async (username, password, done) => {
        let user;
        if (username.match(/[a-z]/i)) {
            user = await Guest.findOne({ username: username });
        } else {
            user = await Student.findOne({ studentID: username });
        }
        if (!user) {
            // done(error in this operation, user found)
            return done(null, false, { message: 'Invalid username or password.' });
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Invalid username or password.' });
            }
        } catch (err) {
            console.log('Authenticate user error: ' + err.message);
            return done(err);
        }
    }
    
    passport.use(new localStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, authenticateUser));
    
    // after authenticate(local) -> serialize to session for remembering -> choose info to save to session
    // to lower the session space occupation -> retrieve the user id from the user object only
    // import to the extra property 'passport' created in session
    // passport: { user: 'the user id' }
    // when need to be called: req.session.passport.user <- {id: '...'}
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    // retrieve user object from db through the user id -> save to req.user which is remembered for every further req
    passport.deserializeUser(async (id, done) => {
        let user;
        try {
            user = await Guest.findById(id);
            if (!user) {
                user = await Student.findById(id);
            }
            done(null, user);
        } catch (err) {
            console.log('Deserialize user issue: ' + err.message);
            return done(err);
        }
    });
}

module.exports = initialize;