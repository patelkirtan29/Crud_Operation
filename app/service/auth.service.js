const bcrypt = require('bcrypt');
const { userList, userModelSchema } = require('../models/userModel');
const jwt = require('jsonwebtoken');


module.exports.login_auth = async(email, password) => {
    const user = await userList.findOne({ email })
    if(user) {
        const auth = await bcrypt.compare(password, user.password);
        if(auth){            
            return user;
        }
        else{
            return 'Password is wrong.'
        }
    }
    else{
        return 'Email is not found.'
    }
}