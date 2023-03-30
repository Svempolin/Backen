// const { request } = require('../app');

const router = require('express').Router()
const { createNewPost, getPost, getPostByID, getPostByAuthor, likePost, updatePost, deletePost } = require('../models/postModel')
const {verifyToken,checkAdmin} = require ('../authentication/auth')

router.post('/',verifyToken ,createNewPost)
router.get('/', getPost)
router.get('/author/:id', getPostByAuthor)
router.get('/:id', getPostByID)


router.put('/likes/:id', likePost)
router.put('/:id',verifyToken, updatePost)

router.delete('/:id',verifyToken,checkAdmin ,deletePost)


module.exports = router;


