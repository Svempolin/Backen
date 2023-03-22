const express = require('express');
const app = express();
const cors = require('cors')



//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// CONTROLLERS
app.use('/api/dishes', require('./controllers/dishController'))
app.use('/api/register', require('./controllers/applicationsController'))
module.exports = app;
