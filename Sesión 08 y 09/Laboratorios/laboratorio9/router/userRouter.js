//Importar express  para crear las rutas de las acciones del controlador
const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.getLoginPage);
router.post("/login", userController.getLogin);
router.get("/index", userController.getIndexPage);
router.get("/logout", userController.getLogout);

//Exporto las variables que quiero que sean accedidas de esta clase
module.exports=router;