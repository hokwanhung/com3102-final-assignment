// Act as middleware function and process requests before route handlers.
function authenticated(req, res, next) {
    if (req.isAuthenticated()) {
        // If request is authenticated, then pass control to the next middleware function.
        // The function is usually provided by a session-based authentication middleware (such as Passport.js),
        // based on the session or credentials.
        return next();
    }
    // If request is not authenticated, redirect user to "/login" route.
    res.redirect('/login');
}

module.exports = authenticated;