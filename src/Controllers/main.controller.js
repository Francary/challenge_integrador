const mainController ={

    home:       ( req, res ) =>  res.render('index') ,
    contact:    ( req, res ) =>  res.send(" Route for Contact View"),
    about:      ( req, res ) =>  res.send(" Route for About View"),
    faqs:       ( req, res ) =>  res.send(" Route for Faqs View"),
}

module.exports = {mainController}