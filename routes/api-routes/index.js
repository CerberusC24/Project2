const router = require('express').Router();
const users = require('./users.js');
const posts = require('./post.js');
const category = require('./category');
const book = require('./book');
const img = require('./img');
const song = require('./song');
const video = require('./video');

// router.use('/media', media);
router.use('/users', users);
router.use('/post', posts);
router.use('/category', category);
router.use('/book', book);
router.use('/img', img);
router.use('/song', song);
router.use('/video', video);

module.exports = router;
