const express = require('express');
const Routes = require('./app/routes/apiRoutes');
const bodyParser = require('body-parser');
const fs = require('fs');
const migrate = require('migrate');
const cookieParser = require('cookie-parser');
require("dotenv").config();

const hostname = '127.0.0.1';
const port = 3001;
const app = express();

//parse request to body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//cookie parser
app.use(cookieParser());

//routes
app.use(Routes);


//migrattions 
// migrate.load({
//   stateStore: '.migrations'
// }, function (err, set) {
//   if (err) {
//     throw err
//   }
//   set.up(function (err) {
//     if (err) {
//       throw err
//     }
//     console.log('migrations successfully ran')
//   })
// })


//seed Demo
// const seed = fs.readFileSync('./app/config/dbConnection/seed.js', { encoding: 'utf8'});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

