import  express from"express";
import {env} from "./src/settings/config.js"
import {mainRouter}  from "./src/routes/main.routes.js";
import {shopRouter}  from "./src/routes/shop.routes.js";
import {adminRouter} from "./src/routes/admin.routes.js";
import {authRouter}  from "./src/routes/auth.routes.js";

const app = express();

app.set("views", "./src/views");

app.set("view engine", "ejs");

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', mainRouter);
app.use('/shop', shopRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);


app.listen( env.PORT , () => console.log(`Servidor en el puerto ${env.PORT}`));