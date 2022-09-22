const postController = require('../controllers/postController');
const router = require('express').Router();

router.post('/addPost', postController.addPost);

router.post('/getAllPosts', postController.getAllPosts);

router.post('/deletePost', postController.deletePost);

module.exports = router;
