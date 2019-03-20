import express from 'express';
import User from '../models/user';
const bcrypt = require('bcryptjs');

let router = express.Router();

router.post('/', (req, res) => {
    const { identifier, password } = req.body;

    User.query({
        where: { username: identifier },
        orWhere: { email: identifier }
    }).fetch().then(user => {
        if (user) {
            // const salt = bcrypt.genSaltSync(10);
            if (bcrypt.compareSync(password, user.get('password_digest'))) {

            } else {
                res.status(401).json({ errors: { form: "Invalid Credentials" } })
            }
        } else {
            res.status(401).json({ errors: { form: "Invalid Credentials" } })
        }
    })
});

export default router;
