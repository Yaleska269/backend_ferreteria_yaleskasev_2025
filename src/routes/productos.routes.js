import { Router } from 'express';
import { obtenerProductos, obtenerProducto, eliminarProducto } from '../Controllers/productos.controllers.js';
const router = Router();

// Ruta para obtener todas las productos
router.get('/productos', obtenerProductos);

// Ruta para obtener una producto por su ID
router.get('/producto/:id_producto', obtenerProducto);

// Ruta para eliminar un producto por su ID
router.delete('/eliminarproducto/:id_producto', eliminarProducto);


export default router;