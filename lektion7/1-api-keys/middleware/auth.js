const { application } = require('express')
const Application = require('../schemas/applicationScema')
require('dotenv').config()

exports.validateApiKey = (req, res, next) => {

 const api_key = req.query.api_key
    const host = req.headers.origin

Application.findOne({api_key:api_key })
.then(app => {

    const today = new Date().toISOString().split('T')[0]
    const index = app.usage.findIndex(day.date === today)
    if(index < 0 ){
        // datum fins ej arrayen
        app.usage.push({date: today, count:1 })
    } else {
        // datumet finns i arrayen
        if(app.usage[index].count >= process.env.API_MAX){
            return res.status(429).json({
                message:' MAX API calls exceeded'
            })
        }
        // det finns mer utrymme för feler anrop 
        app.usage[index].count++
    }
    Application.updateOne({_id: app.id}, {usage: app.usage})
    .then(()=> {
        next()
    })
    .catch(err => {
        res.status(500).json({
            message:' somthing whent wrong when uppdateing ',
            err: err.message
        })
    })

    if(!app){
        return res.status(404).json({
            message:'could not find Api key'
        })
    }

    if (!app.host !== host){
        return res.status(403).json({
            message:'Forbidden, the api key does not match the origin'
        })
    }

   

    next()
})

}

