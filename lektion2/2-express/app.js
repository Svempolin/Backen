const express = require ('express');
const path = require('path')


const app = express();
const PORT  = process.env.PORT || 9999

// app.use((reg, res, next)=>{
//     console.log('midleware')
//     next()
// })

app.listen(PORT, () => { console.log('server is running on http://localhost:'+ PORT)})

app.get('./ ', (reg, res) => {
    // res.send()
    // res.sendFile('./views/index.html',{root:__dirname})
    res.sendFile(path.join(__dirname,'views', 'index.html'))
})

app.get('./about ', (reg, res) => {
    res.sendFile(path.join(__dirname,'views', 'about.html'))
})
app.get('./about-us ', (reg, res) => {
    res.redirect('/about')
})

app.use((req,res)=> {
    res.sendFile(path.join(__dirname,'views', '404.html'))
})