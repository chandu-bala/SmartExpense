const expenseService = require("../services/expenseService");
const { success, failure } = require("../utils/response");

exports.createExpense = async (req, res) => {
  try {
    const response = await expenseService.create(req.userId, req.body);
    return res.status(201).json(success("Expense created", response));
  } catch (err) {
    return res.status(400).json(failure(err.message));
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const response = await expenseService.list(req.userId, req.query);
    return res.json(success("Expenses fetched", response));
  } catch (err) {
    return res.status(400).json(failure(err.message));
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const response = await expenseService.update(
      req.userId,
      req.params.id,
      req.body
    );
    return res.json(success("Expense updated", response));
  } catch (err) {
    return res.status(400).json(failure(err.message));
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    await expenseService.remove(req.userId, req.params.id);
    return res.json(success("Expense deleted"));
  } catch (err) {
    return res.status(400).json(failure(err.message));
  }
};
