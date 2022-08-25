const router = require("express").Router();

const { createPost, deletePost, updatePost, getPost, getFeaturedPosts, getPosts, searchPost, getSimilarPosts, uploadImage } = require("../controllers/post");
const multer = require("../middlewares/multer");
const { postValidator, validate } = require("../middlewares/postValidator");
const { parseData } = require("../middlewares");



router.post(
    '/create', 
    multer.single("thumbnail"), 
    parseData,
    postValidator,
    validate, 
    createPost
);
router.put(
    '/:postId', 
    multer.single("thumbnail"), 
    parseData,
    postValidator,
    validate, 
    updatePost
);
router.delete('/:postId', deletePost);
router.get('/single/:slug', getPost);
router.get('/featured-posts', getFeaturedPosts);
router.get('/posts', getPosts);
router.get('/search', searchPost);
router.get('/similar-posts/:postId', getSimilarPosts);

router.post('/upload-image', multer.single("image"), uploadImage );



module.exports = router;

