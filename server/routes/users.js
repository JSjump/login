import express from 'express';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';

let router = express.Router();

const validateInput = (data) => {
  let errors = {};
  validator.isEmpty(data.username) && (errors.username = "the field is required");
  validator.isEmpty(data.email) && (errors.email = "the field is required");
  validator.isEmpty(data.password) && (errors.password = "the field is required");
  validator.isEmpty(data.passwordConfirmation) && (errors.passwordConfirmation = "the field is required");

  return{
    errors,
    isValid:isEmpty(errors)
  }
}

router.post('/',(req,res) => {
  const {errors, isValid} = validateInput(req.body);

  if(!isValid) {
    res.status(400).json(errors);
  }

});

export default router;
