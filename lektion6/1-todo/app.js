const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/authors', require('./controllers/todoControllers'))



module.exports = app