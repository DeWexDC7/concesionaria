// controllers/rol.controller.js
const Rol = require('../models/rol.model');

exports.findAll = async (req, res) => {
  try {
    const roles = await Rol.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const rol = await Rol.findByPk(req.params.id);
    if (rol) {
      res.status(200).json(rol);
    } else {
      res.status(404).json({ message: 'Rol not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const rol = await Rol.create(req.body);
    res.status(201).json(rol);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Rol.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedRol = await Rol.findByPk(req.params.id);
      res.status(200).json(updatedRol);
    } else {
      res.status(404).json({ message: 'Rol not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Rol.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Rol not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
