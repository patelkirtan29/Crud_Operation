const { userList } = require("../models/userModel");


// service for get users
module.exports.getusers = async (req, res) => {
    try {
        const result = await userList.find();
        if (result) {
            return result;
        }
        else {
            return 'No user Found';
        }
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

// service for post users
module.exports.adduser = async (user) => {
    try {
        if (user) {
            const addedUser = await userList.create({
                name: user.name,
                contact: user.contact,
                email: user.email,
                address: user.address,
                password: user.password
            });
            return addedUser
        }
        else {
            return 'No user Found';
        }
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

//service for update the user
module.exports.updateuser = async (id, data) => {
    try {
        const result = await userList.findByIdAndUpdate(id, data);
        return result;
    }
    catch (err) {
        console.log(err);
        return err
    }
}

//service for update the user
module.exports.deleteuser = async (id) => {
    try {
        await userList.findByIdAndDelete(id);
        return 'Deleted Succesfully';
    }
    catch (err) {
        console.log(err);
        return err
    }
}


