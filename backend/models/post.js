const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imagePath: { type: String, required: true },
  author: { type: String, required: true },
  authorId: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
});


module.exports= mongoose.model('Post', postSchema);