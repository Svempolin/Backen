const app = require('./app');
const mongoose = require('mongoose')

require('dotenv').config();


const PORT = process.env.PORT || 8000


const serverURI = 'http://localhost:' + PORT
const mongo_URI = process.env.MONGO_URI

app.listen(PORT, () => console.log('Server is running on: ' + serverURI));
mongoose.connect(mongo_URI)
.then(() => console.log('connected to DB'))