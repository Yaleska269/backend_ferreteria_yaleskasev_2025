import { Router } from 'express';
import { obtenerEmpleados, obtenerEmpleado, eliminarEmpleado } from '../Controllers/empleados.controllers.js';
const router = Router();

// Ruta para obtener todas las empleados
router.get('/empleados', obtenerEmpleados);

// Ruta para obtener una empleado por su ID
router.get('/empleado/:id_empleado', obtenerEmpleado);

// Ruta para eliminar una empleado por su ID
router.delete('/eliminarempleado/:id_detalles_empleado', eliminarEmpleado);

export default router;