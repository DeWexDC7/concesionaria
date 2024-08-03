// controllers/transaccion.controller.js
const Transaccion = require('../models/transaccion.model');
const Cliente = require('../models/cliente.model');

exports.findAll = async (req, res) => {
  try {
    const transacciones = await Transaccion.findAll({ include: Cliente });
    res.status(200).json(transacciones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const transaccion = await Transaccion.findByPk(req.params.id, { include: Cliente });
    if (transaccion) {
      res.status(200).json(transaccion);
    } else {
      res.status(404).json({ message: 'Transaccion not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const transaccion = await Transaccion.create(req.body);
    res.status(201).json(transaccion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Transaccion.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedTransaccion = await Transaccion.findByPk(req.params.id);
      res.status(200).json(updatedTransaccion);
    } else {
      res.status(404).json({ message: 'Transaccion not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Transaccion.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Transaccion not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
