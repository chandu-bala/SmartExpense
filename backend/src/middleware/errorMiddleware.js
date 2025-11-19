const { failure } = require("../utils/response");

module.exports = (err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.statusCode || 500).json(failure(err.message || "Server error"));
};
