import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../components/CourseCard";

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("/api/courses")
      .then(res => {
        console.log("API Response:", res.data);
        setCourses(Array.isArray(res.data) ? res.data : []);
      })
      .catch(err => {
        console.error("API Error:", err);
        setCourses([]);
      });
  }, []);  return (
    <div className="px-25 py-25">
      <div className="flex justify-between items-center mb-20 ">
        <div>
          <h1 className="text-3xl font-bold">Welcome to EduApp</h1>
          <p className="text-gray-600">Learn and grow your skills</p>
        </div>
        <img src="https://www.billabonghighschool.com/blogs/wp-content/uploads/2024/02/blog-43-What-is-the-importance-of-the-history-of-education.jpg" alt="Hero" className="rounded-xl shadow-lg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map(course => <CourseCard key={course._id} course={course} />)}
      </div>
    </div>
  );
}
