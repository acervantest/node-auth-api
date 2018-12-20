const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const users = require('./routes/users');
const config = require('./config/database');

const app = express();

const PORT = 3000;

//Connect to Db
mongoose.connect(config.database);

//On connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+ config.database);
});

//On connection error
mongoose.connection.on('error', (err) => {
    console.log('Database error '+ err);
});

app.use(cors());

//set static folder
//app.use(express.static(path.join(__dirname, 'public')));

//BodyParser parses incoming request body so we can grab the data
app.use(bodyParser.json());

//Users routes
app.use('/users', users);

//Index route
app.get('/', (req, res) => {
    res.send('Home page');
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});