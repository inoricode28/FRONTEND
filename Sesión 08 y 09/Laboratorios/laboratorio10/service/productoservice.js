const productoModel = require("../data/productoModel");

const crearProducto = async(nombre, precio, estado, descripcion) => {
    let producto = null;
    try {
        producto = await productoModel.producto.create({ nombre, precio, estado, descripcion });
    } catch (exception) {
        producto = null;
        console.error(exception);
    }
    return producto;
}

const actualizarProducto = async(id,nombre, precio, estado, descripcion) => {
    let producto = null;
    try {
        producto = await productoModel.producto.findByPk(id);
        if(producto!=null){
            producto = await producto.update({ nombre, precio, estado, descripcion });
        }       
    } catch (exception) {
        producto = null;
        console.error(exception);
    }
    return producto;
}

const eliminarProducto = async(id) => {
    let producto = null;
    try {
        producto = await productoModel.producto.findByPk(id);
        if(producto!=null){
            producto = await producto.update({ estado: false });
        }       
    } catch (exception) {
        producto = null;
        console.error(exception);
    }
    return producto;
}


const listarProductos = async() => {
    let listaProductos;
    try {
        listaProductos = await productoModel.listarProductosActivos();
    } catch (exception) {
        listaProductos = null;
        console.error(exception);
    }
    return listaProductos;
}

const obtenerProducto = async(id) => {
    let producto;
    try {
        [producto] = await productoModel.producto.findAll({
            attributes: ['id', 'nombre', 'precio'], // Selecciona los campos que deseas obtener
            where: {
                id: id, // Filtra por el estado deseado
            },
        });
    } catch (exception) {
        producto = null;
        console.error(exception);
    }
    return producto;
}


module.exports = {
    crearProducto,
    actualizarProducto,
    eliminarProducto,
    listarProductos,
    obtenerProducto
}