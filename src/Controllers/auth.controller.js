const authController = {
    loginGet:       ( req, res ) => res.render("./auth/login"),
    loginPost:      ( req, res ) => res.send(" Route for Login POST View"),
    registerGet:    ( req, res ) => res.render("./auth/register"),
    registerPost:   ( req, res ) => res.send(" Route for Register POST View"),
    logout:         ( req, res ) => res.send(" Route for Logout View"),
}

module.exports = {authController}