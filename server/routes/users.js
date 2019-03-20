import express from 'express';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';
import User from '../models/user';
// import bcrypt from 'bcryptjs';
const bcrypt = require('bcryptjs');


// var bcrypt = require('bcryptjs');
let router = express.Router();

const commonValidateInput = (data) => {
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

const validateInput = (data,otherValidations) => {
 let {errors} = otherValidations(data);
    return User.query({
        where: {email:data.email},
        orWhere: {username:data.username}
    }).fetch().then(user => {
        if(user){
            if(user.get('email') === data.email){
                errors.email = 'there is user with such email';
            }
            if(user.get('username') === data.username){
                errors.username = 'there is user with such username';
            }
        }
        return {
            errors,
            isValid: isEmpty(errors)
        }
    } )
}

// router.get(':/identifier',(req,res) => {
//     User.query({
//         select: ["username","email"],
//     where: {email: req.params.identifier},
//     orWhere: {username:req.params.identifier}
//     }).fetch().then(user =>{
//         res.json({user})
//     })
// })
router.get('/:identifier', (req, res) => {
    User.query({
        select: ["username", "email"],
        where: { email: req.params.identifier },
        orWhere: { username: req.params.identifier }
    }).fetch().then(user => {
        res.json({ user });
    })
});
router.post('/',(req,res) => {
    validateInput(req.body,commonValidateInput).then(({errors,isValid}) => {
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
});

export default router;
