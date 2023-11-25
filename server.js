const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const multer = require('multer');
const serviceAccount = require('./serviceAccountKey.json');
const admin = require('firebase-admin');

//Iniciamos nuestro proyecto de node.js en firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});



const upload =multer({
    storage: multer.memoryStorage()
});


/*
*RUTAS
*/ 
const users=require('./routes/usersRoutes');
const categories=require('./routes/categoriesRoutes');
const products=require('./routes/productsRoutes');

// (||)devuelve el valor booleano true si uno o ambos operandos son true y, de lo contrario, devuelven false 
const port = process.env.PORT || 3000 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.disable('x-powered-by');

app.set('port',port)


/*
 * LLAMANDO A LA RUTAS
 */

users(app,upload);
categories(app,upload);
products(app, upload);


server.listen(3000,'192.168.18.108'||'localhost', function(){
//console. log : imprime el texto en la consola como un mensaje de registro
    console.log('Aplicacion de NodeJS ' +port+ ' Iniciada...')
});



//ERROR HANDLER
app.use((err, req, res, nexts)=>{
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

module.exports ={
    app:app,
    server:server
}

//200-Es una repsuesta exitosa
//404- Significa que la url no exsiste
//500 Error interno del servidor