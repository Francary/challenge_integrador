
const credenciales = {
    email: "test@test.com",
    password: "123456"
}

const authController = {
    loginGet:       ( req, res ) => res.render("./auth/login"),

    loginPost:      ( req, res ) => {
        const {email , password} =  req.body

        const validarEmail = credenciales.email == email
        const validarPassword = credenciales.password == password    
      
        req.session.isLogged = ( validarEmail && validarPassword) ? true : false;
        

        if(req.session.isLogged) {
            res.locals.isLogged = true;
            console.log("Aqui llegue 1");
            return res.redirect('/admin/admin')
            
        }
        console.log("Aqui llegue 2");
       return res.status(401).send("NO ESTAS AUTORIZADO QUE PASO")
    },

    registerGet:    ( req, res ) => res.render("./auth/register"),
    registerPost:   ( req, res ) => res.send(" Route for Register POST View"),
    logout:         ( req, res ) => res.send(" Route for Logout View"),
}

export {authController}