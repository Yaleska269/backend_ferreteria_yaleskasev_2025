import { pool } from '../../db.connection.js';

// Obtener todas las Detalles_Compras 
export const obtenerDetalles_Compras = async (req, res) => {
try {
const [result] = await pool.query('SELECT * FROM detalles_compras');
res.json(result);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos.',
error: error
});
}
};

// Obtener una detalles_compra  por su ID
export const obtenerDetalles_Compra = async (req, res) => {
try {
const id_detalles_compra = req.params.id_detalles_compra ; // Una forma de hacerlo
const [result] = await pool.query('SELECT * FROM clientes WHERE id_detalles_compra = ?', [req.params.id_detalles_compra]);

if (result.length <= 0) {
return res.status(404).json({
mensaje: `Error al leer los datos. ID ${req.params.id} no encontrado.`
});
}  // Si no hay coincidencias

res.json(result[0]);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos de las detalles_compra.'
});
}
};

// Registrar una nueva Detalles_Compra
export const registrarDetalles_Compra = async (req, res) => {
try {
const { 
    id_detalle_compra,
    id_compra,
    id_producto,
    cantidad,
    precio_unitario
} = req.body;

const [result] = await pool.query(
'INSERT INTO detalles_compras ( id_detalle_compra, id_compra, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)',
[  id_detalle_compra,
    id_compra,
    id_producto,
    cantidad,
    precio_unitario]
);
res.status(201).json({ id_detalle_compra: result.insertId });
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al registrar el detalles_compra.',
error: error
});
}
};

// Eliminar una detalle_compra por su ID 
export const eliminarDetalle_Compra= async (req, res) => {
    try {
        const id_detalle_compra = req.params.id_detalle_compra;
        const [result] = await pool.query('DELETE FROM detalle_compras WHERE id_detalle_compra = ?', [id_detalle_compra]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al eliminar. ID ${id_detalle_compra} no encontrado.`
            });
        }
        // Repuesta sin contenido para indicar éxito
        res.status(204).send();
    }catch (error){
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al eliminar el detalle_compra.',
            error:error

    });

}
};

export const actualizarDetalle_Compra = async (req, res) => {
    try {
        const {id_detalle_compra} = req.params;
        const datos = req.body;


        const {result} = await pool.query(
            'UPDATE detalle_compras SET ? WHERE id_detalle_compra = ?',
            [datos, id_detalle_compra]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: ` detalle_compra con ID ${id_detalle_compra} no encontrada.`
            });
        }
        res.status(200).json({
            mensaje: `detalle_compra con ID ${id_detalle_compra} actualizada.`
        });
    }catch (error) {
        return res.status(500).json({ mensaje: 'Error al actualizar la detalle_compra.', error });
    }
};
