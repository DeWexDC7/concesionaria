// utils/response.util.js
exports.success = (res, data) => {
    res.status(200).json(data);
  };
  
  exports.error = (res, message, code = 500) => {
    res.status(code).json({ message });
  };
  