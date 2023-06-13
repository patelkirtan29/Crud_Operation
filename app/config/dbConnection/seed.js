const { default:mongoose } = require('mongoose');

const seedcon = mongoose.createConnection('mongodb://127.0.0.1:27017/Demo');

seedcon.on('open', () => {
    console.log('Connected to MongoDB');
});

const foo = async() => {
    await seedcon.collection('seed').insertOne({
        name: 'Admin',
        password: 'admin',
        role: 'admin'
    })
}

foo();
