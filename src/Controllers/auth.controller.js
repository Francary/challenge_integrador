const authController = {
    loginGet:       ( req, res ) => res.send(" Route for Login GET View"),
    loginPost:      ( req, res ) => res.send(" Route for Login POST View"),
    registerGet:    ( req, res ) => res.send(" Route for Register GET View"),
    registerPost:   ( req, res ) => res.send(" Route for Register POST View"),
    logout:         ( req, res ) => res.send(" Route for Logout View"),
}

module.exports = {authController}