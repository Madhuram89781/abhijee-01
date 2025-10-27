const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: Number,
  imageUrl: String,
  episodes: [
    {
      title: String,
      description: String,
      videoUrl: String,
      imageUrl: String,
    }
  ],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);
