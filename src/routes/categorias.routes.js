import { Router } from 'express';
import { obtenerCategorias, obtenerCategoria, registrarCategoria, eliminarCategoria, actualizarCategoria} from '../Controllers/categorias.controllers.js';
const router = Router();

// Ruta para obtener todas las categorías
router.get('/categorias', obtenerCategorias);

// Ruta para obtener una categoría por su ID
router.get('/categorias/:id_categoria', obtenerCategoria);

// Ruta para registrar una nueva Categoría
router.post('/registrarcategoria', registrarCategoria);

// Ruta para eliminar una categoria por su ID
router.delete('/eliminarcategoria/:id_categoria', eliminarCategoria);

// Ruta para actualizar una categoría por su ID
router.patch('/actualizarcategoria/:id_categoria',actualizarCategoria);
            
export default router;

