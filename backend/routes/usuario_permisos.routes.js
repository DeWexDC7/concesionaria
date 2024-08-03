// routes/usuarios_permisos.routes.js
const express = require('express');
const router = express.Router();
const usuariosPermisosController = require('../controllers/usuarios_permisos.controller');

router.get('/', usuariosPermisosController.findAll);
router.get('/:id', usuariosPermisosController.findOne);
router.post('/', usuariosPermisosController.create);
router.put('/:id', usuariosPermisosController.update);
router.delete('/:id', usuariosPermisosController.delete);

module.exports = router;
