const express = require('express');
const bodyParser = require('body-parser');
const routerApi = require('./routes')

require('dotenv').config();

const PORT = process.env.PORT || 4000;

const app = express();

//Middlewares
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json());

routerApi(app);

//Routes
app.get('/api/v1',(req, res)=>{
    res.send('API de peliculas 📽️');
})

app.use('/*',(req, res) => {
    res.status(404).send("Oops! The page you requested was not found! 😿");
})

app.listen(PORT, ()=>{
    console.log(`El servidor esta escuchando en http://localhost:${PORT}/api/v1`);
})