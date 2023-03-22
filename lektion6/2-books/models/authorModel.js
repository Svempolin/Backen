const Author = require('../schemas/authorSchema')

exports.addNewAuthor = (req, res) => {
    const {firstName, lastName} = req.body;

    if(!firstName || !lastName){
        res.status(400).json({ 
            message: 'you need to enter a author'
    })
return
}

Author.create({firstName, lastName})
.then(data => res.status(201).json(data))
.catch(()=> res.status(500).json({message: ' hej och hå'}))

}

exports.getAuthors = (req, res) => {
    Author.find()
    .then(data => res.status(200).json(data))
    .catch(()=> res.status(500).json({message: ' hej och då'}))
    
    
}


