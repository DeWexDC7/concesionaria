// routes/auto.routes.js
const express = require('express');
const router = express.Router();
const autoController = require('../controllers/auto.controller');

router.get('/', autoController.findAll);
router.get('/:id', autoController.findOne);
router.post('/', autoController.create);
router.put('/:id', autoController.update);
router.delete('/:id', autoController.delete);

module.exports = router;
