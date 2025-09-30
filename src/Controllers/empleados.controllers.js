import { pool } from '../../db.connection.js';

// Obtener todas las Empleados
export const obtenerEmpleados = async (req, res) => {
try {
const [result] = await pool.query('SELECT * FROM empleados');
res.json(result);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos.',
error: error
});
}
};

// Obtener una empleado por su ID
export const obtenerEmpleado = async (req, res) => {
try {
const id_empleado = req.params.id_empleado; // Una forma de hacerlo
const [result] = await pool.query('SELECT * FROM ca WHERE id_empleado = ?', [req.params.id_empleado]);

if (result.length <= 0) {
return res.status(404).json({
mensaje: `Error al leer los datos. ID ${req.params.id} no encontrado.`
});
}  // Si no hay coincidencias

res.json(result[0]);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos de las empleados.'
});
}
};


// Registrar una nueva Empleado
export const registrarEmpleado = async (req, res) => {
try {
const { 
    id_empleado,
    primer_nombre,
    segundo_nombre,
    primer_apellido,
    segundo_apellido,
    celular,
    cargo ,
    fecha_contratacion 
} = req.body;

const [result] = await pool.query(
'INSERT INTO empleados (   id_empleado, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
[ 
    id_empleado,
    primer_nombre,
    segundo_nombre,
    primer_apellido,
    segundo_apellido,
    celular,
    cargo ,
    fecha_contratacion ]
);
res.status(201).json({ id_compra: result.insertId });
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al registrar el empleado.',
error: error
});
}
};


// Eliminar una empleado por su ID 
export const eliminarEmpleado= async (req, res) => {
    try {
        const id_empleado = req.params.id_empleado;
        const [result] = await pool.query('DELETE FROM emplados WHERE id_empleado = ?', [id_empleado]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al eliminar. ID ${id_empleado} no encontrado.`
            });
        }
        // Repuesta sin contenido para indicar éxito
        res.status(204).send();
    }catch (error){
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al eliminar el empleado.',
            error:error

    });

}
};

export const actualizarEmpleado = async (req, res) => {
    try {
        const {id_empleado} = req.params;
        const datos = req.body;


        const {result} = await pool.query(
            'UPDATE empleados SET ? WHERE id_empleado = ?',
            [datos, id_empleado]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: ` empleado con ID ${id_empleado} no encontrada.`
            });
        }
        res.status(200).json({
            mensaje: `empleado con ID ${id_empleado} actualizada.`
        });
    }catch (error) {
        return res.status(500).json({ mensaje: 'Error al actualizar la empleado.', error });
    }
};
