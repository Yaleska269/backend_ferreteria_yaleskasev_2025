import { Router } from 'express';
import { obtenerVentas, obtenerVenta, eliminarVenta } from '../Controllers/ventas.controllers.js';
const router = Router();

// Ruta para obtener todas las ventas
router.get('/ventas', obtenerVentas);

// Ruta para obtener una venta por su ID
router.get('/venta/:id_venta', obtenerVenta);

// Ruta para eliminar una venta por su ID
router.delete('/eliminarventa/:id_venta', eliminarVenta);

export default router;