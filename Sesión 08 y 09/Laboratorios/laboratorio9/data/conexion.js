//Importando paquete MYSQL
const mysql = require("mysql2");

//Configurar las variables de entorno
require("dotenv").config({path:"./properties.env"});

//Creando una variable con los datos de la conexion
const datoConexion={
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
}

//Creando la conexion a la BD (PASO 1)
const conexion = mysql.createConnection(datoConexion);

//PROBANDO LA CONEXION
//Validando la conexion a la BD (UTILIZARLO PARA VALIDAR LA CONEXION)
conexion.connect((error) => {
    try{
        if(error){
            console.log("Error al establecer la conexión a la BD:"+error);
        }else{
            //conexion exitosa (en este punto hemos establecido la conexion a la BD)
            console.log("Conexión exitosa");
            //Aqui puedes escribir el codigo que necesitas utilizar (CRETE, INSERT, SELECT)
        }
    }catch(exception){
        console.log("Ocurrio una excepción al conextarce a la BD: "+exception);
    }
});
//Exporto las variables que quiero que sean accedidas de esta clase
module.exports=conexion;