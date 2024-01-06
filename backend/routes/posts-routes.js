const express = require("express");
const { check } = require("express-validator");

const postsController = require("../Controllers/posts-controller");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get("/", postsController.getAllPost);

router.use(checkAuth);

router.post(
  "/new-posts",
  [
    check("title").not().isEmpty(),
    check("description").isLength(
      { min: 5 },
      check("imagePath").not().isEmpty(),
      check("author").not().isEmpty(),
      check("authorId").not().isEmpty()
    ),
  ],
  postsController.createPost
);
router.put(
  "/edit-posts/:pid",
  [
    check("title").not().isEmpty(),
    check("description").isLength(
      { min: 5 },
      check("imagePath").not().isEmpty(),
      check("author").not().isEmpty(),
      check("authorId").not().isEmpty()
    ),
  ],
  postsController.updatePost
);

router.delete("/:pid", postsController.deletePost);

module.exports = router;
