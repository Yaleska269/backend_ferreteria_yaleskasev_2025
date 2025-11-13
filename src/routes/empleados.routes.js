import { Router } from 'express';
import { obtenerEmpleados, obtenerEmpleado, eliminarEmpleado, actualizarEmpleado, registrarEmpleado } from '../Controllers/empleados.controllers.js';
const router = Router();

// Ruta para obtener todas las empleados
router.get('/empleados', obtenerEmpleados);

// Ruta para obtener una empleado por su ID
router.get('/empleado/:id_empleado', obtenerEmpleado);

// Ruta para eliminar una empleado por su ID
router.delete('/eliminarempleado/:id_empleado', eliminarEmpleado);

// Ruta para actualizar un empleado por su ID
router.patch('/actualizarempleado/:id_empleado', actualizarEmpleado);
            
// Ruta para registrar una nuevo empleado
router.post('/registrarempleado', registrarEmpleado);

export default router;