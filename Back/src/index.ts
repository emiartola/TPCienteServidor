import bodyParser from "body-parser";
import express from "express";
import rutas from './rutas';

const app = express();
//Esto crea la base de datos
require('./db');

//Ahora uso body-parser para las peticiones post (poder mandar objetos por esas peticiones)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(rutas);
app.listen(3000, () => console.log("Servidor en puerto 3000", 3000));