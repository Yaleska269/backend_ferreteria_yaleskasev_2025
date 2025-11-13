import { pool } from '../../db.connection.js';

// Obtener todos los productos
export const obtenerProductos = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM productos');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error,
        });
    }
};

// Obtener un producto por su ID
export const obtenerProducto = async (req, res) => {
    try {
        const { id_producto } = req.params;
        const [result] = await pool.query(
            'SELECT * FROM productos WHERE id_producto = ?',
            [id_producto]
        );

        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_producto} no encontrado.`,
            });
        }

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos del producto.',
            error,
        });
    }
};

// Registrar un nuevo producto
export const registrarProducto = async (req, res) => {
    try {
        const {
            nombre_producto,
            descripcion_producto,
            id_categoria,
            precio_unitario,
            stock,
            imagen,
        } = req.body;

        // Validación básica
        if (!nombre_producto || !precio_unitario || !id_categoria) {
            return res.status(400).json({
                mensaje: 'Faltan campos obligatorios (nombre, precio, categoría).',
            });
        }

        const [result] = await pool.query(
            'INSERT INTO productos (nombre_producto, descripcion_producto, id_categoria, precio_unitario, stock, imagen) VALUES (?, ?, ?, ?, ?, ?)',
            [nombre_producto, descripcion_producto, id_categoria, precio_unitario, stock, imagen]
        );

        res.status(201).json({ id_producto: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar el producto.',
            error,
        });
    }
};

// Eliminar un producto por su ID
export const eliminarProducto = async (req, res) => {
    try {
        const { id_producto } = req.params;
        const [result] = await pool.query(
            'DELETE FROM productos WHERE id_producto = ?',
            [id_producto]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al eliminar. ID ${id_producto} no encontrado.`,
            });
        }

        res.status(204).send();
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al eliminar el producto.',
            error,
        });
    }
};

// Actualizar un producto por su ID
export const actualizarProducto = async (req, res) => {
    try {
        const { id_producto } = req.params;
        const datos = req.body;

        const [result] = await pool.query(
            'UPDATE productos SET ? WHERE id_producto = ?',
            [datos, id_producto]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Producto con ID ${id_producto} no encontrado.`,
            });
        }

        res.status(200).json({
            mensaje: `Producto con ID ${id_producto} actualizado correctamente.`,
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al actualizar el producto.',
            error,
        });
    }
};
