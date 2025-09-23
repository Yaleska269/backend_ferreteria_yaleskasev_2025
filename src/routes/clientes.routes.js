import { Router } from 'express';
import { obtenerClientes, obtenerCliente, eliminarCliente} from '../Controllers/clientes.controllers.js';
const router = Router();

// Ruta para obtener todas las Clientes
router.get('/clientes', obtenerClientes);

// Ruta para obtener una cliente por su ID
router.get('/clientes/:id_cliente', obtenerCliente);

// Ruta para eliminar una cliente por su ID
router.delete('/eliminarcliente/:id_cliente', eliminarCliente);

export default router;