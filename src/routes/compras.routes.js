import { Router } from 'express';
import { obtenerCompras, obtenerCompra, eliminarCompra, actualizarCompra} from '../Controllers/compras.controllers.js';
const router = Router();

// Ruta para obtener todas las Compras
router.get('/compras', obtenerCompras);

// Ruta para obtener una compras por su ID
router.get('/compra/:id_compra', obtenerCompra);

// Ruta para eliminar una compra por su ID
router.delete('/eliminarcompra/:id_compra', eliminarCompra);

// Ruta para actualizar una compra por su ID
router.patch('/actualizarcompra/:id_compra', actualizarCompra);
            
export default router;