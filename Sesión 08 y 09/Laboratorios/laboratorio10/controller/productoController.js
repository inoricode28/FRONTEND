const productoServise = require("../service/productoservice");

const crearProducto = async(req, res)=>{
    try{
        const {nombre, precio, estado, descripcion} = req.body;
        const producto =  await productoServise.crearProducto(nombre, precio, estado, descripcion);
        res.status(200).json(producto);
    }catch(excpetion){
        res.status(500).json({error:"Error al crear el producto"});
    }
}

const actualizarProducto = async(req, res)=>{
    try{
        const {nombre, precio, estado, descripcion} = req.body;
        const {id} = req.params;
        const producto =  await productoServise.actualizarProducto(id,nombre, precio, estado, descripcion);
        res.status(200).json(producto);
    }catch(excpetion){
        res.status(500).json({error:"Error al actualizar el producto"});
    }
}

const eliminarProducto = async(req, res)=>{
    try{
        const {id} = req.params;
        const producto =  await productoServise.eliminarProducto(id);
        res.status(200).json(producto);
    }catch(excpetion){
        res.status(500).json({error:"Error al eliminar el producto"});
    }
}

const listarProductos = async(req, res)=>{
    try {
        const productos = await productoServise.listarProductos();
        res.status(200).json(productos);
      } catch (error) {
        console.error(error); // Muestra el error en la consola para obtener más detalles
        res.status(500).json({ error: 'Error al obtener los productos' });
      }
}

const obtenerProducto = async(req, res)=>{
    try {
        const {id} = req.params;
        const productos = await productoServise.obtenerProducto(id);
        res.status(200).json(productos);
      } catch (error) {
        console.error(error); // Muestra el error en la consola para obtener más detalles
        res.status(500).json({ error: 'Error al obtener los productos' });
      }
}

module.exports={
    crearProducto,
    actualizarProducto,
    eliminarProducto,
    listarProductos,
    obtenerProducto
}