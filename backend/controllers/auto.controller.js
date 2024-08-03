// controllers/auto.controller.js
import Auto = require('../models/auto.model');
import Cliente = require('../models/cliente.model');

exports.findAll = async (req, res) => {
  try {
    const autos = await Auto.findAll({ include: Cliente });
    res.status(200).json(autos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const auto = await Auto.findByPk(req.params.id, { include: Cliente });
    if (auto) {
      res.status(200).json(auto);
    } else {
      res.status(404).json({ message: 'Auto not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const auto = await Auto.create(req.body);
    res.status(201).json(auto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Auto.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedAuto = await Auto.findByPk(req.params.id);
      res.status(200).json(updatedAuto);
    } else {
      res.status(404).json({ message: 'Auto not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Auto.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Auto not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
