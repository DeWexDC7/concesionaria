// controllers/permiso.controller.js
import Permiso = require('../models/permiso.model');

exports.findAll = async (req, res) => {
  try {
    const permisos = await Permiso.findAll();
    res.status(200).json(permisos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const permiso = await Permiso.findByPk(req.params.id);
    if (permiso) {
      res.status(200).json(permiso);
    } else {
      res.status(404).json({ message: 'Permiso not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const permiso = await Permiso.create(req.body);
    res.status(201).json(permiso);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Permiso.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedPermiso = await Permiso.findByPk(req.params.id);
      res.status(200).json(updatedPermiso);
    } else {
      res.status(404).json({ message: 'Permiso not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Permiso.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Permiso not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
