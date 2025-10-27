const router = require("express").Router();
const { protect } = require("../middleware/auth.middleware");
const { addToWishlist, getWishlist } = require("../controllers/wishlist.controller");

router.post("/add", protect, addToWishlist);
router.get("/", protect, getWishlist);

module.exports = router;
