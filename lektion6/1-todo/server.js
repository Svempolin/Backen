const app = require('./app');

require('dotenv').config()

const mongoose = require('mongoose')

const PORT = process.env.PORT || 8080


app.listen(PORT, () => console.log('server is running: http://localhost:' + PORT) )

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log(' connected do DB'))
.catch (err => console.log(err))