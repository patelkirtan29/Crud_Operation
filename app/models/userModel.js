const { default: mongoose } = require("mongoose");
const { con } = require('../config/dbConnection/dbConnection');
const bcrypt = require('bcrypt');



const userModelSchema = new mongoose.Schema({
    name: {
        type: String
    },
    contact: {
        type: Number
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    password: {
        type: String
    }
});

userModelSchema.post('save', (doc, next) => {
    console.log('new user is added', doc);
    next();
});

//hashing password before saving it to db
userModelSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//hashing after updating it to db
userModelSchema.pre('findOneAndUpdate', async function (next) {
    const salt = await bcrypt.genSalt();
    this._update.password = await bcrypt.hash(this._update.password, salt);
    next();
});

const userList = con.model('user', userModelSchema);

module.exports = { userList, userModelSchema };