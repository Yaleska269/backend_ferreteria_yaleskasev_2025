import { Router } from 'express';
import { obtenerProductos, obtenerProducto, eliminarProducto, registrarProducto, actualizarProducto } from '../Controllers/productos.controllers.js';
const router = Router();

// Ruta para obtener todas las productos
router.get('/productos', obtenerProductos);

// Ruta para obtener una producto por su ID
router.get('/producto/:id_producto', obtenerProducto);

// Ruta para eliminar un producto por su ID
router.delete('/eliminarproducto/:id_producto', eliminarProducto);

// Ruta para actualizar un producto por su ID
router.patch('/actualizarproducto/:id_producto', actualizarProducto);
            
// Ruta para registrar una nuevo producto
router.post('/registrarproducto', registrarProducto);
export default router;