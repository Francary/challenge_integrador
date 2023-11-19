const adminController ={
    admin:          ( req, res ) => res.send(" Route for Admin View") ,
    createGet:      ( req, res ) => res.send(" Route for Admin Create GET View") ,
    createPost:     ( req, res ) => res.send(" Route for Admin Create POST View") ,
    editGet:        ( req, res ) => res.send(" Route for Admin Edit ID GET View"),
    editPut:        ( req, res ) => res.send(" Route for Admin Edit ID PUT View"),
    delete:         ( req, res ) => res.send(" Route for Admin View"),
};

module.exports = {adminController}

