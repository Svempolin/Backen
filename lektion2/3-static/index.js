const express = require('express')
const { Agent } = require('http')
const path = require('path')


const app = express()

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env. PORT || 9999
app.listen(PORT, () => console.log('server running: http://localhost:'+ PORT))

app.get('/api/data', (req, res)=> {
    const data = {
        name:'Lotta',
        age:36,
        phoneNumber: 1111111, 
    }
    res.json(data)
})