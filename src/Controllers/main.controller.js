import fs from 'fs/promises';

const mainController ={

    home:    async   ( req, res ) =>{
        const jsonContent = await fs.readFile("db.json", 'utf-8');
        const data = JSON.parse(jsonContent);

        res.render('index', { data }) 

    },
    
    contact:    ( req, res ) =>  res.render('./main/contact'),
    about:      ( req, res ) =>  res.render('./main/about'),
    faqs:       ( req, res ) =>  res.render('./main/faqs'),
}

export {mainController}