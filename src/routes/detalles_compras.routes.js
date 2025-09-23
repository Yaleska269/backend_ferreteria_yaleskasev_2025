import { Router } from 'express';
import { obtenerDetalles_Compras, obtenerDetalles_Compra, eliminarDetalle_Compra } from '../Controllers/detalles_compras. controllers.js';
const router = Router();

// Ruta para obtener todas las Detalles_Compras
router.get('/detalles_compras', obtenerDetalles_Compras);

// Ruta para obtener una compras por su ID
router.get('/detalles_compra/:id_detalles_compra', obtenerDetalles_Compra);

// Ruta para eliminar una detalles_compras por su ID
router.delete('/eliminardetalles_compras/:id_detalles_compras', eliminarDetalle_Compra);

export default router;