const { default:mongoose } = require("mongoose");

const Uri = 'mongodb://127.0.0.1:27017/Demo';

const con = mongoose.createConnection(Uri);

con.on('open', () => {
    console.log('Connected')
})

module.exports = { con }