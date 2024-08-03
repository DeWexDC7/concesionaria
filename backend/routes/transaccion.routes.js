// routes/transaccion.routes.js
const express = require('express');
const router = express.Router();
const transaccionController = require('../controllers/transaccion.controller');

router.get('/', transaccionController.findAll);
router.get('/:id', transaccionController.findOne);
router.post('/', transaccionController.create);
router.put('/:id', transaccionController.update);
router.delete('/:id', transaccionController.delete);

module.exports = router;
