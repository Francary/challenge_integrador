const  express = require("express");


const mainRouter  = require ("./src/routes/main.routes.js");
const shopRouter  = require ("./src/routes/shop.routes.js");
const adminRouter = require ("./src/routes/admin.routes.js");
const authRouter  = require ("./src/routes/auth.routes.js");

const puerto = 4000;
const app = express();

app.set("views",__dirname + "/src/views");
app.set("view engine", "ejs");

app.use(express.static('public'))

app.use(express.urlencoded());
app.use(express.json());


app.use('/', mainRouter);
app.use('/shop', shopRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);


app.listen( puerto , () => console.log(`Servidor en el puerto ${puerto}`));