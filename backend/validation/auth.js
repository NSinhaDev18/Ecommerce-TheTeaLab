const Joi = require("joi");

let signupSchema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(20).required(),

  lastName: Joi.string().alphanum().min(3).max(20).required(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),

  // repeat_password: Joi.ref('password'),

  mobile: Joi.number().integer().required(),

  address: Joi.string().alphanum().min(10).max(100).required(),
  city: Joi.string().min(3).max(40).required(),
  state: Joi.string().min(2).max(40).required(),
  pincode: Joi.number().integer().min(8).max(8).required(),

  // birth_year: Joi.number()
  //     .integer()
  //     .min(1900)
  //     .max(2013),
});

let loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
});
let passwordSchema = Joi.object({
  new_password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),
  confirmNewPassoword: Joi.ref("new_password"),
});

let mobileSchema = Joi.object({
  mobile: Joi.number().integer().min(10).max(10).required(),
});
module.exports = { signupSchema, loginSchema, passwordSchema, mobileSchema };
