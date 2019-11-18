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

    try {
        const savedPost = await post.save();
        res.json(savedPost);

    } catch (err) {
        res.json({ message: err });
    }

});

// This route gets a specfic post
router.get('/:postId', async (req, res) => {

    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

// This route will delete a specfic post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);

    } catch (err) {
        res.json({ message: err });
    }
});

// This route will update a specfic post
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            { _id: req.params.postId }, 
            {$set: {title: req.body.title }});
        res.json(updatePost);
    } catch (err) {
        res.json({ message: err });
    }
});

// Export the Router

module.exports = router;