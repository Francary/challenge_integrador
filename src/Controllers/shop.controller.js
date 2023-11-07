const shopController = {
    shop:       ( req, res ) => res.send(" Route for Shop View"),
    itemGet:    ( req, res ) => res.send(" Route for Shop View for ID"),
    itemPost:   ( req, res ) => res.send(" Route for Shop View for ID for ADD "),
    cartGet:    ( req, res ) => res.send(" Route for Shop Cart GET View"),
    cartPost:   ( req, res ) => res.send(" Route for Shop Cart POST View"),
}

export{shopController}