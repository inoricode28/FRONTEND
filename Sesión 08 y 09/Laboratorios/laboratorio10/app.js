const express = require('express');
const app = express();
const productoRoter= require('./router/productoRoter');
require("dotenv").config({path:"./properties.env"});

// Configuración para analizar el cuerpo de las solicitudes JSON
app.use(express.json());
// Configuración para analizar el cuerpo de las solicitudes URL codificado
app.use(express.urlencoded({ extended: true }));

app.use("/api",productoRoter);

const port = process.env.PORT;
const host = process.env.HOST
app.listen(port,host, () => {
console.log(`Servidor en ejecución en http://${host}:${port}`);
});