import { pool } from '../../db.connection.js';

// Obtener todos los empleados
export const obtenerEmpleados = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM empleados');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ha ocurrido un error al leer los datos.', error: error.message });
    }
};

// Obtener un empleado por su ID
export const obtenerEmpleado = async (req, res) => {
    try {
        const { id_empleado } = req.params;
        const [result] = await pool.query('SELECT * FROM empleados WHERE id_empleado = ?', [id_empleado]);

        if (result.length === 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_empleado} no encontrado.`
            });
        }

        res.json(result[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ha ocurrido un error al leer los datos del empleado.', error: error.message });
    }
};

// Registrar un nuevo empleado
export const registrarEmpleado = async (req, res) => {
    try {
        const {
            primer_nombre,
            segundo_nombre,
            primer_apellido,
            segundo_apellido,
            celular,
            cargo,
            fecha_contratacion
        } = req.body;

        const [result] = await pool.query(
            'INSERT INTO empleados (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion]
        );

        res.status(201).json({ id_empleado: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ha ocurrido un error al registrar el empleado.', error: error.message });
    }
};

// Eliminar un empleado por su ID
export const eliminarEmpleado = async (req, res) => {
    try {
        const { id_empleado } = req.params;
        const [result] = await pool.query('DELETE FROM empleados WHERE id_empleado = ?', [id_empleado]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: `Error al eliminar. ID ${id_empleado} no encontrado.` });
        }

        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Ha ocurrido un error al eliminar el empleado.', error: error.message });
    }
};

// Actualizar un empleado
export const actualizarEmpleado = async (req, res) => {
    try {
        const { id_empleado } = req.params;
        const datos = req.body;

        const [result] = await pool.query('UPDATE empleados SET ? WHERE id_empleado = ?', [datos, id_empleado]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: `Empleado con ID ${id_empleado} no encontrado.` });
        }

        res.status(200).json({ mensaje: `Empleado con ID ${id_empleado} actualizado correctamente.` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al actualizar el empleado.', error: error.message });
    }
};
