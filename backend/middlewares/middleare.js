// middlewares/auth.middleware.js
module.exports = (req, res, next) => {
    const authToken = req.headers['authorization'];
    
    if (authToken) {
      // Verificar token (jwt u otro método)
      next();
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  };
  