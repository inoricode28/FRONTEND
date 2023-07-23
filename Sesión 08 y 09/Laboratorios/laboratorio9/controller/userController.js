//Importar userModel y Path
const userModel = require("../data/userModel");
const path = require("path");

// Puedo tener una constante general const userControler={};

// Puedo usar funciones function getLoginPage(req, res){}
const getLoginPage= (req, res)=>{
    res.sendFile(path.join(__dirname,"../public/view/login.html"));
}

const getIndexPage= (req, res)=>{
    res.sendFile(path.join(__dirname,"../public/view/index.html"));
}

const getLogin =(req, res)=>{
   const usuario = req.body.txtUsuario;
   const password = req.body.txtPassword;

   userModel.getUser(usuario, password, (user)=>{
    if(user){
        req.session.user=user;
        console.log(user.usuario);
        res.redirect("index");
    }else{
        console.log("Las credenciales no son validas");
        res.redirect("/");
    }
   })
}

const getLogout =(req, res)=>{
    req.session.destroy((error)=>{
        if(error){
            console.log(error);
        }
        res.redirect("/");
    })
 }
 
//Exporto las variables que quiero que sean accedidas de esta clase
module.exports={
    getLoginPage,
    getIndexPage,
    getLogin,
    getLogout
}
