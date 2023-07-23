//Importar conexion (PASO 1)
const conexion = require("./conexion");

//Mis consultas SQL
const userModel ={
    getUser: (usuario, password,callback)=>{
        //Crear la consulta SQL
        // const sql = "SELECT * FROM usuario WHERE usuario='"+usuario+"' and password= AES_ENCRYPT('"+password+"','IDAT')" //Esta forma no es recomendada
        const sql = "SELECT * FROM usuario WHERE usuario=? and password= AES_ENCRYPT(?,'IDAT')" //Esta forma es la mas recomendada
        conexion.query(sql,[usuario,password],(error,resultado)=>{
            try{
                if(error){
                    console.log("Error al ejecutar el query en la BD:"+error);
                }else{
                    callback(resultado[0]);
                }
            }catch(exception){
                console.log("Ocurrio una excepción al ejecutar el query en la BD: "+exception);
            }
        });
        
    }
}
//Exporto las variables que quiero que sean accedidas de esta clase
module.exports=userModel;