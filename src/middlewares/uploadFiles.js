import multer  from "multer";
import  path  from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';


// como partir desde el directorio actual
const ruta = dirname(fileURLToPath(import.meta.url));


const storage  = multer.diskStorage({
    destination: ( req , file , cb ) => {
        cb (null , path.resolve( ruta , '../../public/img/products'))
    },
    filename: ( req , file , cb ) => {
        cb (null , `${Date.now()}-${file.originalname}` )
        
    }

})

const upload = multer ({storage})

export {
    upload
}