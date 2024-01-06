const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");

const Post = require("../models/post");
const User = require("../models/user");
const { default: mongoose } = require("mongoose");
const post = require("../models/post");

const getAllPost = async (req, res, next) => {
  let posts;
  try {
    posts = await Post.find();
  } catch (err) {
    return next(new HttpError("Posts fetch failed, Try again later", 500));
  }

  res
    .status(200)
    .json({ posts: posts.map((post) => post.toObject({ getters: true })) });
};

const createPost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError(
        "Invalid inputs passed, please try again with valid input.",
        422
      )
    );
  }
  const { title, description, imagePath, author } = req.body;

  const createdPost = new Post({
    title,
    description,
    imagePath,
    author,
    authorId: req.userData.userId,
  });
  let user;
  try {
    user = await User.findById(req.userData.userId);
  } catch (err) {
    return next(new HttpError("Failed to create place", 500));
  }

  if (!user) {
    return next(new HttpError("couldn't found user for provided id", 404));
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdPost.save({ session: sess });
    user.posts.push(createdPost);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    return next(new HttpError("Couldn't create post", 500));
  }

  res.status(201).json({
    message: "post created",
    post: createdPost.toObject({ getters: true }),
  });
};

const updatePost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid inputs, please check your data", 422));
  }

  const { title, description, imagePath, author } = req.body;
  const postId = req.params.pid;

  let updatedPost;
  try {
    updatedPost = await Post.findById(postId);
  } catch (err) {
    return next(
      new HttpError("Something went wrong, coudn't update post"),
      500
    );
  }
  if (updatedPost.authorId !== req.userData.userId) {
    return next(new HttpError("You are not allowed to edit this post", 401));
  }

  updatedPost.title = title;
  updatedPost.description = description;
  updatedPost.imagePath = imagePath;
  updatedPost.author = author;

  try {
    await updatedPost.save();
  } catch (err) {
    return next(new HttpError("Cannot update post", 500));
  }
  res.status(200).json({ post: updatedPost.toObject({ getters: true }) });
};

const deletePost = async (req, res, next) => {
  const pid = req.params.pid;

  let selectedPost;
  try {
    selectedPost = await Post.findById(pid).populate("authorId");
  } catch (err) {
    return next(new HttpError("cant delete post", 500));
  }

  if (!selectedPost) {
    return next(new HttpError("Cannot find post for this Id", 404));
  }

  if (selectedPost.authorId.id !== req.userData.userId) {
    return next(
      new HttpError("You are not authorized to delete this post", 401)
    );
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await selectedPost.deleteOne({ session: sess });
    selectedPost.authorId.posts.pull(selectedPost);
    await selectedPost.authorId.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    return next(new HttpError("Something went wrong", 500));
  }
  res.status(200).json({ message: "Deleted place." });
};

exports.createPost = createPost;
exports.getAllPost = getAllPost;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
