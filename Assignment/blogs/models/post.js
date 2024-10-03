const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imagePath: { type: String, required: true },
  author: { type: String, required: true },
  dateCreated: {
    type: String,
    default: function() {
      const date = new Date();
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
  },
  authorId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  image: { type: String, required: true }
});

module.exports = mongoose.model("Post", postSchema);
