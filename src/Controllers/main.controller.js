import { getAll } from '../models/product.model.js';

const mainController ={

    home:    async   ( req, res ) =>{
     
        const data = await getAll()
        res.render('index', { data }) 

    },
    
    contact:    ( req, res ) =>  res.render('./main/contact'),
    about:      ( req, res ) =>  res.render('./main/about'),
    faqs:       ( req, res ) =>  res.render('./main/faqs'),
}

export {mainController}