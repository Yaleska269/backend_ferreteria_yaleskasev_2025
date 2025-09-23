import { pool } from '../../db.connection.js';

// Obtener todas las ventas
export const obtenerVentas = async (req, res) => {
try {
const [result] = await pool.query('SELECT * FROM ventas');
res.json(result);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos.',
error: error
});
}
};

// Obtener una venta por su ID
export const obtenerVenta = async (req, res) => {
try {
const id_venta = req.params.id_venta; // Una forma de hacerlo
const [result] = await pool.query('SELECT * FROM ca WHERE id_venta = ?', [req.params.id_venta]);

if (result.length <= 0) {
return res.status(404).json({
mensaje: `Error al leer los datos. ID ${req.params.id} no encontrado.`
});
}  // Si no hay coincidencias

res.json(result[0]);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos de las ventas.'
});
}
};

// Eliminar una venta por su ID 
export const eliminarVenta= async (req, res) => {
    try {
        const id_venta = req.params.id_venta;
        const [result] = await pool.query('DELETE FROM ventas WHERE id_venta = ?', [id_venta]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al eliminar. ID ${id_venta} no encontrado.`
            });
        }
        // Repuesta sin contenido para indicar éxito
        res.status(204).send();
    }catch (error){
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al eliminar la venta.',
            error:error

    });

}
};