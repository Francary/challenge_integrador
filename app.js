import  express  from "express";
import { mainRouter } from "./src/routes/main.routes.js";
import { shopRouter } from "./src/routes/shop.routes.js";
import { adminRouter } from "./src/routes/admin.routes.js";
import { authRouter } from "./src/routes/auth.routes.js";

const puerto = 4000;
const app = express();



app.use(express.static('public'))
app.use('/', mainRouter);
app.use('/shop', shopRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);


app.listen( puerto , () => console.log(`Servidor en el puerto ${puerto}`));