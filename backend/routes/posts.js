const router = require("express").Router();
const Post = require("../modals/Post");


//Create Post
router.post("/create", async(req, res)=>{
    const newPost = new Post(req.body);
    try{
        const post = await newPost.save();
        res.status(200).json(post);
    }catch(err) {
        res.status(500).json(err);
    }
});


//Update Post
router.put("/:id", async(req ,res) => {
    try{
    const post = await Post.findById(req.params.id);
        // try{
            // if(req.body.author === post.author){
                // try{
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },{new:true});
        res.status(200).json(updatedPost);
    }catch(err){
        res.status(500).json(err);
    }
            // }else{
                // res.status(401).json("You are not the author");
            // }
        // }catch(err){
            // res.status(500).json(err);
        // }
    // }catch(err){
        // res.status(500).json(err);
    // }
});

//Delete Post
router.delete("/:id", async(req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if (req.body.author === post.author) { 
            try {
                await Post.findByIdAndDelete(req.params.id);
                res.status(200).json("Post deleted");
        } catch (err) {
            res.status(500).json(err);
        }
        } else {
            res.status(401).json("You are not authorized to delete");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//Get Post
router.get('/:id', async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
});

router.get('/', async (req,res) => {
    const author = req.query.author;
    try{
        let posts;
        if(author){
            posts = await Post.find({author:author});
        }
        else {
            posts = await Post.find().limit(8);
        }
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router