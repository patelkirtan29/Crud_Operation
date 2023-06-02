const express = require('express');
const Routes = require('./app/routes/apiRoutes');
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const port = 3001;
const app = express();

//parse request to body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use(Routes);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

