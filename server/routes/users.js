import express from 'express';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';
import User from '../models/user';
// import bcrypt from 'bcryptjs';
const bcrypt = require('bcryptjs');


// var bcrypt = require('bcryptjs');
let router = express.Router();

const validateInput = (data) => {
  let errors = {};
  validator.isEmpty(data.username) && (errors.username = "the field is required");
  validator.isEmpty(data.email) && (errors.email = "the field is required");
  !validator.isEmail(data.email) && (errors.email = "the email is invalid");

  validator.isEmpty(data.password) && (errors.password = "the field is required");
  validator.isEmpty(data.passwordConfirmation) && (errors.passwordConfirmation = "the field is required");
  !validator.equals(data.password,data.passwordConfirmation) && (errors.passwordConfirmation = "Must be match");

  return{
    errors,
    isValid:isEmpty(errors)
  }
}

router.post('/',(req,res) => {
    const {errors, isValid} = validateInput(req.body);
    if(isValid) {
      const {username,password,email} = req.body;
        const salt = bcrypt.genSaltSync(10);
      const password_digest = bcrypt.hashSync(password,salt);
      User.forge({
          username,password_digest,email
      },{hasTimestamps:true}).save()
          .then(user =>res.json({success:true}))
          .catch(err => res.status(500).json({errors:err}))
    }else {
      res.status(400).json(errors);
    }
});

export default router;
