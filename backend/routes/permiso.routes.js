// routes/permiso.routes.js
const express = require('express');
const router = express.Router();
const permisoController = require('../controllers/permiso.controller');

router.get('/', permisoController.findAll);
router.get('/:id', permisoController.findOne);
router.post('/', permisoController.create);
router.put('/:id', permisoController.update);
router.delete('/:id', permisoController.delete);

module.exports = router;
