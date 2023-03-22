const { default: mongoose } = require("mongoose");

const todoSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, 'You need to enter a todo']
    }, 

    completed: {
        type: Boolean,
        default: false
    },

    // createdAt: {
    //     type:Date,
    //     default: Date.now()
    // }

}, {timestamps:true}) // timestamp = true  ger oss när den är skapad och när den är uppdatradd atomatiskt


module.exports = mongoose.model('Todo', todoSchema)

