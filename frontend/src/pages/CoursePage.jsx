import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoCard from "../components/VideoCard";
import PlaylistCard from "../components/PlaylistCard";

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:3231/api/courses/${id}`);
        console.log("Course data:", res.data);

        const courseData = res.data.course || res.data; // flexible shape
        setCourse(courseData);
        if (courseData.episodes?.length > 0)
          setSelectedEpisode(courseData.episodes[0]);
      } catch (err) {
        console.error("Error fetching course:", err);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Loading course...
      </div>
    );

  return (
    <div className="flex w-full h-screen p-6 gap-4">
      {/* Left - Playlist (40%) */}
      <div className="w-2/5">
        <PlaylistCard
          episodes={course.episodes}
          onSelectEpisode={setSelectedEpisode}
        />
      </div>

      {/* Right - Video Player (60%) */}
      <div className="w-3/5">
        <VideoCard episode={selectedEpisode} />
      </div>
    </div>
  );
};

export default CoursePage;
