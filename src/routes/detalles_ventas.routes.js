import { Router } from 'express';
import { obtenerDetalles_Ventas, obtenerDetalles_Venta, eliminarDetalle_Venta} from '../Controllers/detalles_ventas.controllers.js';
const router = Router();

// Ruta para obtener todas las detalles_ventas
router.get('/detalles_ventas', obtenerDetalles_Ventas);

// Ruta para obtener una compras por su ID
router.get('/venta/:id_detalles_venta', obtenerDetalles_Venta);

// Ruta para eliminar una detalles_venta por su ID
router.delete('/eliminardetalles_venta/:id_detalles_venta', eliminarDetalle_Venta);

export default router;