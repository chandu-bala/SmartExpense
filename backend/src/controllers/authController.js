const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authService = require("../services/authService");
const { success, failure } = require("../utils/response");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const response = await authService.registerUser(name, email, password);
    return res.status(201).json(success("User registered", response));

  } catch (err) {
    return res.status(400).json(failure(err.message));
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const response = await authService.loginUser(email, password);
    return res.status(200).json(success("Login successful", response));

  } catch (err) {
    return res.status(400).json(failure(err.message));
  }
};
