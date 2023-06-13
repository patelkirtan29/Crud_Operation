const { OK, ResourceNotFound } = require("../helpers/response-codes");
const { login_auth } = require('../service/auth.service');
const jwt = require('jsonwebtoken');

// jwt token
const token = (id, role) => {
    return jwt.sign({ id, role }, process.env.TOKEN_KEY, { expiresIn: '1h' });
}


//login get
module.exports.login_get = (req, res) => {
    res.status(200).send('ok')
}

//login post
module.exports.login_post = async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await login_auth(email, password);
        const createdToken = token(user._id, user.role);
        res.cookie('jwt_token', createdToken, { httpOnly: true, maxAge: 60 * 60 * 1 * 1000 }); // expires in 1h
        res.status(OK).send(user);
    }
    catch (err) {
        console.log(err);
        res.status(ResourceNotFound).send("Error");
    }
}