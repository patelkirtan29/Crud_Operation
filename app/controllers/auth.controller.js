const { OK, ResourceNotFound } = require("../helpers/response-codes");
const { login_auth }  = require('../service/auth.service');

//login get
module.exports.login_get = (req, res) => {
    res.status(200).send('ok')
}

//login post
module.exports.login_post = async(req, res) => {
    const { email, password } = req.body;
    try{
        const user = await login_auth(email, password)
        res.status(OK).send(user)
    }
    catch(err){
        console.log(err);
        res.status(ResourceNotFound).send("Error");
    }
}