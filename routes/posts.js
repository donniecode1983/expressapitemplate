// Import Libriaies
const express = require('express');

// Create Router
const router = express.Router();

// Pull in Post Model
const Post = require('../models/Post');

// Build Routes

// This route gets all Posts
router.get('/', async (req, res) => {
    // res.send('We are on posts!');
    try {
        const posts = await Post.find();
        res.json(posts);

    } catch (err) {
        res.json({ message: err });
    }
});


// This roue submits a Post
router.post('/', async (req, res) => {
    // console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
    });

    // post.save()
    // .then(data => {
    //     res.json(data);
    // })
    // .catch(err => {
    //     res.json({ message: err });
    // });


    try {
        const savedPost = await post.save();
        res.json(savedPost);

    } catch (err) {
        res.json({ message: err });
    }

});

// Export the Router

module.exports = router;