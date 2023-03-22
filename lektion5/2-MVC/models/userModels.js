const User = require('../schemas/userSchemas')



 exports.getAllUsers = (req, res) => {
 User.find()
 .then(data => {
    res.status(200).json(data)
 })
}

exports.createNewUser = (req, res) => {
    User.create({firstName, lastName})
    .then(data => {
        res.status(201).json(data)
    })
}


exports.createUserById = (req, res) => {
    User.findOne({_id: req.params.id})
    .then(data => {
        res.status(201).json(data)
    })
}