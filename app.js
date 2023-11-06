import  express  from "express";

const puerto = 4000;
const app = express();



app.use(express.static('public_html'))
app.get('/ping', (req , res) => res.send('pong'));

app.listen( puerto , () => console.log(`Servidor en el puerto ${puerto}`));