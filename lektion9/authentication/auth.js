const jwt = require('jsonwebtoken')
require('dotenv').config()
const Admin = require('../schemas/adminSchema')

const secretKey = process.env.SECRET_KEY 

exports.generateToken = (employee) => {
    return jwt.sign({_id: employee._id}, secretKey, {expiresIn:'1d'})
}


exports.verifyToken = (reg, res, next) => {
    try{
        const token = req.headers.authorization.split('')[1]
        // det jag får till baka är ett id
        // req.userData = jwt.verify(token, secretKey);
        req.userId = jwd.verify(token, secretKey)._id
        next()
    } catch{
        res.status(401).json({
            message: " you need to login first "
        })
    }
} 




exports.checkAdmin = (req, res, next) => {
    const admin = Admin.findById(req.userId)
    if(!admin){
        res.status(404).json({
            message: "You need to be admin"
         })    
} next ()
}