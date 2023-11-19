const shopController = {
    shop:       ( req, res ) => res.render('./shop/shop'),
    itemGet:    ( req, res ) => res.render('./shop/item'),
    itemPost:   ( req, res ) => res.send(" Route for Shop View for ID for ADD "),
    cartGet:    ( req, res ) => res.render('./shop/cart'),
    cartPost:   ( req, res ) => res.send(" Route for Shop Cart POST View"),
}

module.exports = {shopController}