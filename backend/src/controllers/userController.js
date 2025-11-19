const User = require("../models/User");
const { success, failure } = require("../utils/response");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-passwordHash");
    return res.json(success("Profile fetched", user));
  } catch (err) {
    return res.status(500).json(failure(err.message));
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name } = req.body;

    const updated = await User.findByIdAndUpdate(
      req.userId,
      { name },
      { new: true }
    ).select("-passwordHash");

    return res.json(success("Profile updated", updated));
  } catch (err) {
    return res.status(500).json(failure(err.message));
  }
};
