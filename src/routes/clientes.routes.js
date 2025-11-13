import { Router } from 'express';
import { obtenerClientes, obtenerCliente, registrarCliente, eliminarCliente, actualizarCliente} from '../Controllers/clientes.controllers.js';
const router = Router();

// Ruta para obtener todas las Clientes
router.get('/clientes', obtenerClientes);

// Ruta para obtener una cliente por su ID
router.get('/clientes/:id_cliente', obtenerCliente);

// Ruta para registrar una nuevo cliente
router.post('/registrarcliente', registrarCliente);

// Ruta para eliminar una cliente por su ID
router.delete('/eliminarcliente/:id_cliente', eliminarCliente);

// Ruta para actualizar una cliente por su ID
router.patch('/actualizarcliente/:id_cliente', actualizarCliente);
            
export default router;