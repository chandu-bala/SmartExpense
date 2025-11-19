const Expense = require("../models/Expense");
const { validateExpense } = require("../utils/validator");

exports.create = async (userId, data) => {
  const { error } = validateExpense(data);
  if (error) throw new Error(error.details[0].message);

  data.user = userId;
  return await Expense.create(data);
};

exports.list = async (userId, query) => {
  const filter = { user: userId };

  if (query.category) filter.category = query.category;
  if (query.startDate && query.endDate)
    filter.date = { $gte: query.startDate, $lte: query.endDate };

  const expenses = await Expense.find(filter).sort({ date: -1 });

  return expenses;
};

exports.update = async (userId, id, data) => {
  const exp = await Expense.findOne({ _id: id, user: userId });
  if (!exp) throw new Error("Expense not found or unauthorized");

  Object.assign(exp, data);
  return await exp.save();
};

exports.remove = async (userId, id) => {
  const exp = await Expense.findOne({ _id: id, user: userId });
  if (!exp) throw new Error("Expense not found or unauthorized");

  await exp.deleteOne();
  return true;
};
