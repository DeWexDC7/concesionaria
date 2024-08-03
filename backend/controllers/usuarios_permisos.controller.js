// controllers/usuarios_permisos.controller.js
const UsuarioPermiso = require('../models/usuario_permiso.model');
const Usuario = require('../models/usuario.model');
const Permiso = require('../models/permiso.model');

exports.findAll = async (req, res) => {
  try {
    const usuariosPermisos = await UsuarioPermiso.findAll({ include: [Usuario, Permiso] });
    res.status(200).json(usuariosPermisos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const usuarioPermiso = await UsuarioPermiso.findByPk(req.params.id, { include: [Usuario, Permiso] });
    if (usuarioPermiso) {
      res.status(200).json(usuarioPermiso);
    } else {
      res.status(404).json({ message: 'UsuarioPermiso not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const usuarioPermiso = await UsuarioPermiso.create(req.body);
    res.status(201).json(usuarioPermiso);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await UsuarioPermiso.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedUsuarioPermiso = await UsuarioPermiso.findByPk(req.params.id);
      res.status(200).json(updatedUsuarioPermiso);
    } else {
      res.status(404).json({ message: 'UsuarioPermiso not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await UsuarioPermiso.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'UsuarioPermiso not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
