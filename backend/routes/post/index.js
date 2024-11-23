const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');

// Create a new post
router.post('/', async (req, res) => {
  const { title, imageUrl } = req.body;
  try {
    const newPost = new Post({ title, imageUrl });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
