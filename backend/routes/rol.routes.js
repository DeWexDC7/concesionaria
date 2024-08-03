// routes/rol.routes.js
const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rol.controller');

router.get('/', rolController.findAll);
router.get('/:id', rolController.findOne);
router.post('/', rolController.create);
router.put('/:id', rolController.update);
router.delete('/:id', rolController.delete);

module.exports = router;
