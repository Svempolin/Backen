const Post = require('../schemas/postSchema');


exports.createNewPost = async(req, res) => {
    // const {title, body, imgURL, admin, tags} = req.body;
    const {title, body, imgURL,  tags} = req.body;

    // if(!title|| !body ||!imgURL ){
    //     return res.status(400).json({
    //         message: "you need to enter all the fields"
    //     })
    // }

   const post = await Post.create({title, body, imgURL, author: req.userId, tags})

   if(!post){
    return res.status(500).json({
        message: "data bas error could not create post"
    })
   }
   res.status(201).json(post)
}


// HÄMTAR ALLA

exports.getPost = async (req, res) => {
    try {

    //     const {tag} = req.query; 
    //     let query = {tag}
    //     if (tag){
    //        query = {tags: tag}
    //     } else{
    //         query = {}
    //     }
 
    
const query = tag ? {tags: tag} : {} // turnery operator (enklare sätt av insats kan göras på en rad)

    const post = await Post.find(query).populate('author')
{
    res.status(200).json(post)

}
    } catch (error) {
        res.status(500).json({
            message: "something went wrong"
        })
    }
  
}

exports.getPostByID = async (req, res) => {
    
        const post = await Post.findById(req.params.id)
      
  if(!post){
    return res.status(404).json({
        message:" colud not find that post"
    })
  }
  res.status(200).json(post)
}

exports.getPostByAuthor = async (req, res)=> {
    const post = await Post.find({author: req.params.id})
    res.status(200).json(post)
}


exports.likePost = async (req, res)=> {
    const post = await Post.findById(req.params.id)
    post.likes ++
    await post.save()
    res.status(200).json(post)
}


exports.updatePost = async (req, res)=>{
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true})

    if(!post){
        return res.status(404).json({
            message: "data bas error could not create post"
        })
       }
 res.status(200).json(post)
}


exports.deletePost = async (req, res)=>{
    const post = await Post.findByIdAndDelete(req.params.id)

    if(!post){
        return res.status(404).json({
            message: "could not find that post "
        })
       }
 res.status(200).json(post)
}