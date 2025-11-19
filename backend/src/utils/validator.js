const Joi = require("joi");

exports.validateRegister = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

exports.validateExpense = (data) => {
  const schema = Joi.object({
    amount: Joi.number().required(),
    category: Joi.string().required(),
    description: Joi.string().optional(),
    date: Joi.date().required(),
  });
  return schema.validate(data);
};
