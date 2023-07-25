const express = require('express');
const router = express.Router();
const productoController = require("../controller/productoController");

router.post("/productos",productoController.crearProducto);
router.put("/productos/:id",productoController.actualizarProducto);
router.delete("/productos/:id",productoController.eliminarProducto);
router.get("/productos",productoController.listarProductos);
router.get("/productos/:id",productoController.obtenerProducto);

module.exports=router;
