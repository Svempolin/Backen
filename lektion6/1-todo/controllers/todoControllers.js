const router = require('express').Router()
const todoModel = require('../models/todoModels')


// create

router.post('/', todoModel.createNewTodo)

// read

router.get('/', todoModel.getTodos)


//delte

router.delete('/:id', todoModel.deleteTodo)

// update

router.put('/:id', todoModel.updateTodo)

module.exports = router;


// http://localhost:9999/api/todos/