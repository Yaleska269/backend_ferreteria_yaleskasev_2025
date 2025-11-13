import { Router } from 'express';
import { obtenerVentas, obtenerVenta, eliminarVenta, actualizarVenta, registrarVenta } from '../Controllers/ventas.controllers.js';
const router = Router();

// Ruta para obtener todas las ventas
router.get('/ventas', obtenerVentas);

// Ruta para obtener una venta por su ID
router.get('/venta/:id_venta', obtenerVenta);

// Ruta para eliminar una venta por su ID
router.delete('/eliminarventa/:id_venta', eliminarVenta);

// Ruta para registrar una nueva Venta
router.post('/registrarventa', registrarVenta);

// Ruta para actualizar un venta por su ID
router.put('/actualizarventa/:id_venta', actualizarVenta);
            
export default router;