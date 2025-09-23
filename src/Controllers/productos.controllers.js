import { pool } from '../../db.connection.js';

// Obtener todas las Productos
export const obtenerProductos = async (req, res) => {
try {
const [result] = await pool.query('SELECT * FROM productos');
res.json(result);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos.',
error: error
});
}
};

// Obtener una producto por su ID
export const obtenerProducto = async (req, res) => {
try {
const id_producto = req.params.id_producto; // Una forma de hacerlo
const [result] = await pool.query('SELECT * FROM ca WHERE id_producto = ?', [req.params.id_producto]);

if (result.length <= 0) {
return res.status(404).json({
mensaje: `Error al leer los datos. ID ${req.params.id} no encontrado.`
});
}  // Si no hay coincidencias

res.json(result[0]);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos de los productos.'
});
}
};

// Registrar una nueva Producto
export const registrarProducto = async (req, res) => {
try {
const { 
    id_producto ,
    nombre_producto ,
    descripcion_producto,
    id_categoria,
    precio_unitario,
    stock,
    imagen 
} = req.body;

const [result] = await pool.query(
'INSERT INTO clientes (id_producto , nombre_producto , descripcion_producto, id_categoria, precio_unitario, stock, imagen ) VALUES (?, ?, ?, ?, ?, ?, ?)',
[   id_producto ,
    nombre_producto ,
    descripcion_producto,
    id_categoria,
    precio_unitario,
    stock,
    imagen ]
);
res.status(201).json({ id_cliente: result.insertId });
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al registrar la cliente.',
error: error
});
}
};

// Eliminar una producto por su ID 
export const eliminarProducto= async (req, res) => {
    try {
        const id_producto = req.params.id_producto;
        const [result] = await pool.query('DELETE FROM productos WHERE id_producto = ?', [id_producto]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al eliminar. ID ${id_producto} no encontrado.`
            });
        }
        // Repuesta sin contenido para indicar éxito
        res.status(204).send();
    }catch (error){
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al eliminar la producto.',
            error:error

    });

}
};