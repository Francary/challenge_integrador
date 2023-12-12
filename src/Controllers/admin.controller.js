const adminController ={
    admin:          ( req, res ) => res.render("./admin/admin") ,
    createGet:      ( req, res ) => res.render("./admin/create") ,
    createPost:     ( req, res ) => res.send(" Route for Admin Create POST View") ,
    editGet:        ( req, res ) => res.render("./admin/edit"),
    editPut:        ( req, res ) => res.send(" Route for Admin Edit ID PUT View"),
    delete:         ( req, res ) => res.send(" Route for Admin View"),
};

export  {adminController}

