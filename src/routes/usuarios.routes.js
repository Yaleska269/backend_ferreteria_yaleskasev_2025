import { Router } from 'express';
import { obtenerUsuarios, obtenerUsuario, eliminarUsuario, actualizarUsuario, registrarUsuario } from '../Controllers/usuarios.controllers.js';
const router = Router();

// Ruta para obtener todas las usuarios
router.get('/usuarios', obtenerUsuarios);

// Ruta para obtener una usuario por su ID
router.get('/usuario/:id_usuario', obtenerUsuario);

// Ruta para eliminar una usuario por su ID
router.delete('/eliminarusuario/:id_usuario', eliminarUsuario);

// Ruta para actualizar un usuario por su ID
router.patch('/actualizarusuario/:id_usuario', actualizarUsuario);
            
// Ruta para registrar una nuevo usuario
router.post('/registrarusuario', registrarUsuario);
export default router;