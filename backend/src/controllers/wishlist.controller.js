const User = require("../models/user.model");

exports.addToWishlist = async (req, res) => {
  try {
    const { courseId } = req.body;
    const user = await User.findById(req.user.id);

    if (!user.wishlist.some(w => w.courseId.toString() === courseId)) {
      user.wishlist.push({ courseId });
      await user.save();
    }
    res.json({ message: "Course added to wishlist" });
  } catch (err) {
    res.status(500).json({ message: "Error adding to wishlist" });
  }
};

exports.getWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("wishlist.courseId", "title description imageUrl price");
    res.json(user.wishlist.map(w => w.courseId));
  } catch (err) {
    res.status(500).json({ message: "Error fetching wishlist" });
  }
};
