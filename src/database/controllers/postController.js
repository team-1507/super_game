const db = require('../');

const Post = db.posts;

const addPost = async ({ body: { title = null, text = null, post = null } }, res) => {
    const data = {
        title,
        text,
        user: 1,
        post,
        published: true,
    };
    const newPost = await Post.create(data);

    res.status(200).send(newPost);
}

const getAllPosts = async (req, res) => {
    const posts = await Post.findAll({});

    res.status(200).send(posts);
}

const deletePost = async ({ params: { id } }, res) => {
    const post = await Post.destroy({ where: { id }});

    res.status(200).send(post);
}

module.exports = {
    addPost,
    getAllPosts,
    deletePost
};
