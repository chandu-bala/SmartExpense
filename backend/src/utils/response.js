
exports.success = (message, data = null) => ({
  success: true,
  message,
  data,
});

exports.failure = (message) => ({
  success: false,
  message,
});
