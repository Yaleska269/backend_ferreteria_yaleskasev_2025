import { pool } from '../../db.connection.js';

// Obtener todas las Detalles_Ventas
export const obtenerDetalles_Ventas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM detalles_ventas');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener una Detalles_Venta  por su ID
export const obtenerDetalles_Venta = async (req, res) => {
    try {
        const id_detalles_venta = req.params.id_detalles_venta; // Una forma de hacerlo
        const [result] = await pool.query('SELECT * FROM clientes WHERE id_detalles_compra = ?', [req.params.id_detalles_venta]);

        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${req.params.id} no encontrado.`
            });
        }  // Si no hay coincidencias

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de las detalles_venta.'
        });
    }
};

// Registrar una nueva Detalles_Venta
export const registrarDetalles_Venta = async (req, res) => {
try {
const { 
    id_detalle_venta,
    id_venta,
    id_producto,
    cantidad,
    precio_unitario 
} = req.body;

const [result] = await pool.query(
'INSERT INTO detalles_ventas (  id_detalle_venta, id_venta, id_producto, cantidad, precio_unitario ) VALUES (?, ?, ?, ?, ?)',
[   id_detalle_venta,
    id_venta,
    id_producto,
    cantidad,
    precio_unitario ]
);
res.status(201).json({ id_detalles_venta: result.insertId });
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al registrar el detalle_venta.',
error: error
});
}
};

// Eliminar una detalle_venta por su ID 
export const eliminarDetalle_Venta= async (req, res) => {
    try {
        const id_detalle_venta = req.params.id_detalle_venta;
        const [result] = await pool.query('DELETE FROM detalle_ventas WHERE id_detalle_venta = ?', [id_detalle_venta]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al eliminar. ID ${id_detalle_venta} no encontrado.`
            });
        }
        // Repuesta sin contenido para indicar éxito
        res.status(204).send();
    }catch (error){
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al eliminar el detalle_venta.',
            error:error

    });

}
};