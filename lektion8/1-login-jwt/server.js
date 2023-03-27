const mongoose  = require('mongoose');
const app = require('./app')


require('dotenv').config()

const PORT = process.env.PORT || 9999;
app.listen(PORT, () =>  console.log('server is running on: http://9999'))

mongoose.connect(process.env.MONGO_URI)

