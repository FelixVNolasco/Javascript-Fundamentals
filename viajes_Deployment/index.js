import express, { Router } from 'express'
import router from './routes/index.js'
import db from './config/db.js'
import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

const app = express();

//Conexion de base de datos


db.authenticate()
  .then( () => console.log('Base de datos conectada'))
  .catch( error => console.log(error));




//Obtener el año actual
  app.use((req, res, next)=> {

    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    next();
  })


//Agregar Body Parser para leer datos de formularios

app.use(express.urlencoded({extended: true}));

//Habilitar PUG
app.set('view engine', 'pug');

//Definimos la carpeta publica
app.use(express.static('public'));

//Agrega router
app.use('/', router); 


//Definicion del Host dinamico
const host = process.env.HOST || '0.0.0.0';
//Definición del puerto dinamico
const port = process.env.PORT || 4000;

app.listen(port, host, ()=> {
  console.log('El servidor esta funcionando correctamente');  
});

