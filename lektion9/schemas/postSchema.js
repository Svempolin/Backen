const mongoose = require('mongoose')

const {Schema} = mongoose;


const tagSchema = new Schema({
    name:{type: String},
    category:{type: String}
})

const postSchema = new Schema({
title:{type: String, require: true},
body:{type: String,require: true},
imgURL:{type: String, require: true},
tags:{ type:[]},
author:{ type:Schema.Types.ObjectId, ref: 'Employee', require: true}, // forenkey
likes: {type: Number, default: 0}
})



const Post = mongoose.model("Post", postSchema)
const Tag = mongoose.model("Tag", tagSchema)

module.exports = Post