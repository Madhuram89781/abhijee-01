const router = require("express").Router();
const { protect } = require("../middleware/auth.middleware");
const { getProfile } = require("../controllers/profile.controller");

router.get("/", protect, getProfile);

module.exports = router;
