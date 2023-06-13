const { OK, ResourceNotFound } = require("../helpers/response-codes");
const { getusers, adduser, updateuser, deleteuser } = require("../service/userapi.services");

//api for get the users
module.exports.user = async (req, res) => {
    try {
        const result = await getusers();
        res.status(OK).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(ResourceNotFound).send('Errors');
    }
}

//api for post the user
module.exports.useradd = async (req, res) => {
    try {
        const result = await adduser(req.body);
        res.status(OK).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(ResourceNotFound).send('Errors');
    }
}

//api for update the user
module.exports.userupdate = async (req, res) => {
    try {
        const result = await updateuser(req.params.id, req.body);
        res.status(OK).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(ResourceNotFound).send('Errors');
    }
}

//api for delete the user
module.exports.userdelete = async (req, res) => {
    try {
        const result = await deleteuser(req.params.id);
        res.status(OK).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(ResourceNotFound).send('Errors');
    }
}