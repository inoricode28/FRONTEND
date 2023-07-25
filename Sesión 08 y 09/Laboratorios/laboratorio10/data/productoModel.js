const dataType = require('sequelize');
const conexion = require("./conexion");

const productoModel = {
    producto: conexion.define('producto', {
        nombre: {
            type: dataType.STRING,
            allowNull: false
        },
        precio: {
            type: dataType.FLOAT,
            allowNull: false,
        },
        estado: {
            type: dataType.BOOLEAN,
            allowNull: false,
        },
        descripcion: {
            type: dataType.TEXT,
            allowNull: true,
        }

    }, {
        // Especifica el nombre de la tabla en la base de datos
        tableName: 'producto',
    }),

    // Ejemplo de consulta SQL personalizada
    listarProductosActivos: async() => {
        try {
            const consulta = "SELECT id, nombre, precio FROM producto WHERE estado = :estado";
            const resultados = await conexion.query(consulta, {
                replacements: { estado: true }, // Reemplazo de parámetros
                type: dataType.QueryTypes.SELECT,
            });
            console.log(resultados);
            return resultados;
        } catch (error) {
            console.error('Error al ejecutar la consulta:', error);
            return null;
        }
    }
}


// Agregar esta línea para sincronizar la tabla con la base de datos //para que borre la data que se esta almacenando { force: true }
productoModel.producto.sync();

module.exports = productoModel;