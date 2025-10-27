const router = require("express").Router();
const { protect } = require("../middleware/auth.middleware");
const { addCourse, getCourses, getCourseById, searchCourses } = require("../controllers/course.controller");

router.post("/add", protect, addCourse);
router.get("/", getCourses);
router.get("/search", searchCourses);
router.get("/:id", getCourseById);

module.exports = router;
