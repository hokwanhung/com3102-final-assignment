/*
	index.js
	Entry point for the app.
	To start node index.js
*/

// Load configuration variables locally during development.
// if not in development environment， load from the dotenv file
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: '.env.development'}); // modified, and can be changed if needed.
}

// An Express application is created and listens on port 3000.
// npm dependencies - servers
const express = require('express');
const app = express();
app.listen(3000, () => console.log(`Listening at http://localhost:3000`));

// Import other dependencies and libraries.
// others
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('express-flash');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const path = require('path');

// default view path
// Set views directory to be located in the sub-directory of '/views' as "index.js".
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');
// Enable defining layout templates that provide a common structure (e.g., headers and footers) for multiple views.
// Views can then be inserted into placeholders within the layout.
app.use(expressLayouts); // allows to create a layout file for all of HTML
// Configure to serve both JS and CSS files in the destinated directories.
app.use('*/javascripts', express.static(path.join(__dirname, 'public/javascripts')));
app.use('*/stylesheets', express.static(path.join(__dirname, 'public/stylesheets')));
// Parse incoming JSON data in request bodies and make it available as 'req.body' for further processing.
app.use(express.json());
// Parse incoming URL-encoded data in request bodies and make it available as 'req.body' for further processing.
// Allow parsing of nested objects and arrays also(for "extended:true").
app.use(express.urlencoded({ extended: true }));

// Enable storage of session data in a MongoDB database.
const sessionStore = new MongoStore({
    mongoUrl: process.env.DATABASE_URL,
    collection: 'sessions'  // the name of the collection for session storage (created automatically)
});
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore, // Specify the session store to be used.
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // Specify the maximum usage of 24 hours before the session cookie expires.
}));
// check req.session.passport.user !== null for every req <- if an user has logged in
// every if not null -> grab the user id -> deserializeUser to get the user object
// so that req.user is enabled to use
app.use(passport.initialize());
app.use(passport.session());
// Configure flash messages middleware.
app.use(flash());

// routes (controllers)
app.use('/', require('./routes/index'));
app.use('/login', require('./routes/login'));
app.use('/studentRegister', require('./routes/studentRegister'));
app.use('/guestRegister', require('./routes/guestRegister'));
app.use('/course', require('./routes/course'));
// app.use('/creator/:username', require('./routes/creator'));
app.use('/search', require('./routes/search'));
app.use('/logout', require('./routes/logout'));
app.use((req, res) => { res.status(404).render('404', { title: 'Error', layout: false }) });

// db connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));
