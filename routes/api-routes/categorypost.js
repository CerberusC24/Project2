const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  getAllCategoryPost,
  getAllPostCategory,
  newCategoryPost
} = require("../../controllers/categorypost")

router
  .route("/")
  .post(withAuth, newCategoryPost);
router
  .route("/post/:postid")
  .get(withAuth, getAllCategoryPost);
router
  .route("/category/:categoryid")
  .get(withAuth, getAllPostCategory);

module.exports = router;