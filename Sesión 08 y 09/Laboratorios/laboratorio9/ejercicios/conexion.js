//Importando paquete MYSQL
const mysql = require("mysql2");


//Creando una variable con los datos de la conexion
const datoConexion={
    host: "localhost",
    user:"root",
    password:'root',
    database : 'sistemaventa'
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

//Haciendo consultas a la BD
  //Crear la consulta SQL (PASO 2)
  const sql="SELECT * FROM usuario";
  //Ejecutar la consulta en la bd y obtener un resultado (PASO 3)
  conexion.query(sql,(error,resultado)=>{
    try{
        if(error){
            console.log("Error al ejecutar el query en la BD:"+error);
        }else{
            resultado.forEach(user=>console.log(user.usuario));
            console.log("Ejecución exitosa");
        }
    }catch(exception){
        console.log("Ocurrio una excepción al ejecutar el query en la BD: "+exception);
    }
  });

  //Haciendo consultas especifica a la BD
  const idusuario=1;
  //Crear la consulta SQL (PASO 2)
  const sql2="SELECT * FROM usuario WHERE idusuario="+idusuario;
  //Ejecutar la consulta en la bd y obtener un resultado (PASO 3)
  conexion.query(sql2,(error,resultado)=>{
    try{
        if(error){
            console.log("Error al ejecutar el query en la BD:"+error);
        }else{
            resultado.forEach(user=>console.log(user.usuario));
            console.log("Ejecución exitosa");
        }
    }catch(exception){
        console.log("Ocurrio una excepción al ejecutar el query en la BD: "+exception);
    }
  });
