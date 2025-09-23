import { Router } from 'express';
import { obtenerUsuarios, obtenerUsuario, eliminarUsuario } from '../Controllers/usuarios.controllers.js';
const router = Router();

// Ruta para obtener todas las usuarios
router.get('/usuarios', obtenerUsuarios);

// Ruta para obtener una usuario por su ID
router.get('/usuario/:id_usuario', obtenerUsuario);

// Ruta para eliminar una usuario por su ID
router.delete('/eliminarusuario/:id_usuario', eliminarUsuario);

export default router;