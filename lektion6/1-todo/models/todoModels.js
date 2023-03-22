const Todo = require('../schemas/todoSchema')

/*
POST / api/todos
CREATE NEW TODO
*/

exports.createNewTodo = (req, res) => {

const {title} = req.body

if(!title){
 res.status(400).json({ message:'you need to enter something to do'
})
 return
}

Todo.create({title})
.then((todo) => {
    res.status(201).json(todo)
})
.catch( err => {
    res.status(500).json({
    message: err.message, err
    })
})
}

// GET /Api/todos

exports.getTodos =(req, res) => {
    Todo.find()
    .then(todos => {
        res.status(200).json(todos)
    })
    .catch(err =>{
        res.status(500).json({
            message:err.message, err
            //message: 'colud nott get the todos, err'
        })
    })
} 

// UPPDATERA

exports.updateTodo = (req, res) => {
Todo.findByIdAndUpdate(req.params.id, req.body, { new:true})
.then( todo => {
    if(!todo){
        res.status(404).json({message:"could not find"})
        return
    }
    res.status(200).json({todo})
})
.catch(()=> {
    res.status(500).json({message:"something went wrong when you tried to update"
})
})
}



/// DELETE
// const update = {
//     title:req.body.title,
    //  completed:req.body.compleded
// }
// DELETE

exports.deleteTodo = (req, res) => {
    // Todo.deleteOne({_id: req.params.id})
    Todo.findByIdAndDelete(req.params.id)
    .then(todo => {
        if(!todo){
            res.status(404).json({message:"could not find"})
            return
        }
        res.status(200).json({id: todo._id})
    })
    .catch(()=> {
        res.status(500).json({message:"something went wrong when you tried to delete"
    })
    })
}


