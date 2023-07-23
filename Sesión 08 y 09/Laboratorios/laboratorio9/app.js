const express = require("express");
const bodyParser= require("body-parser");
const session = require("express-session");
const userRouter = require("./router/userRouter");

//Configurar las variables de entorno
require("dotenv").config({path:"./properties.env"});

//Inicializacion de express
const app = express();

//Configuracion de EJS como motor de plantillas
app.set("view engine", "ejs"); //Establecer EJS como motor de plantillas
app.set("views","./public/view");//Directorio donde se encuentran los archivos EJS

//Configurar una varible de entorno para la clave secreta de la sesion
const sessionSecret = process.env.SESSION_SECRET;
app.use(session({
    secret:sessionSecret,
    resave:false,
    saveUninitialized:false,
}));

// Middleware para la captura de datos enviados desde la vista
app.use(bodyParser.urlencoded({extended:true}));

// Middleware para identificar el usuario autenticado
app.use((req, res, next) => {
// Si el usuario está autenticado (tiene una sesión activa)
    if (req.session.user) {
        res.locals.user = req.session.user; // Agregamos los datos del usuario a res.locals para que estén disponibles en las vistas
    }
    next(); // Llamamos a next() para continuar con la ejecución de las siguientes middlewares o rutas
});
  
// Configuración de las rutas de userRouter
app.use('/', userRouter);

const port = process.env.PORT;
const host = process.env.HOST
app.listen(port,host, () => {
console.log(`Servidor en ejecución en http://${host}:${port}`);
});



