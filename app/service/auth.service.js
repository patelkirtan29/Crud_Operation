const bcrypt = require('bcrypt');
const { userList } = require('../models/userModel');

module.exports.login_auth = async(email, password) => {
    const user = await userList.findOne({ email })
    if(user) {
        const auth = await bcrypt.compare(password, user.password)
        console.log(auth)
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
