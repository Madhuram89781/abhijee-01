import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { useState } from "react";
import { Heart } from "lucide-react";

export default function CourseCard({ course }) {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAddToWishlist = async (e) => {
    e.stopPropagation(); // Prevent navigation
    if (!token) {
      alert("Please log in to add to wishlist ❤️");
      return;
    }

    try {
      setLoading(true);
      await axios.post(
        "http://localhost:3231/api/wishlist/add",
        { courseId: course._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setIsWishlisted(true);
    } catch (error) {
      console.error("❌ Error adding to wishlist:", error);
      alert("Failed to add to wishlist");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-white shadow-lg rounded-xl overflow-hidden w-64 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative"
      onClick={() => navigate(`/course/${course._id}`)}
    >
      {/* Course image */}
      <img
        src={course.imageUrl}
        alt={course.title}
        className="h-40 w-full object-cover"
      />

      {/* Card content */}
      <div className="p-4">
        <h3 className="font-bold text-lg">{course.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {course.description}
        </p>
        <p className="mt-2 font-semibold text-blue-600">
          ₹{course.price || "Free"}
        </p>
      </div>

      {/* ❤️ Wishlist button (bottom-right corner) */}
      <div className="absolute bottom-3 right-3">
        <button
          onClick={handleAddToWishlist}
          disabled={loading}
          className="bg-white shadow-md rounded-full p-2 hover:shadow-lg transition-all"
          title={isWishlisted ? "Added to wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-5 h-5 transition-all duration-300 ${
              isWishlisted ? "text-red-500 fill-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
