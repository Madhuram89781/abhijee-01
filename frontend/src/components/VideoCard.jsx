import React from "react";

const VideoCard = ({ episode, course }) => {
  if (!episode)
    return <div className="text-center mt-10 text-gray-600">Select a video</div>;

  // ✅ Convert YouTube "watch?v=" links into embeddable "embed/" links
  const getEmbedUrl = (url) => {
    if (!url) return "";
    try {
      if (url.includes("watch?v=")) return url.replace("watch?v=", "embed/");
      if (url.includes("youtu.be/"))
        return url.replace("youtu.be/", "www.youtube.com/embed/");
      return url;
    } catch (err) {
      console.error("Invalid video URL:", url);
      return "";
    }
  };

  const courseImage =
    course?.imageUrl ||
    episode.imageUrl ||
    "https://via.placeholder.com/100x100?text=Course";

  const courseTitle = course?.title || episode.courseTitle || "Untitled Course";

  return (
    <div className="flex flex-col w-full h-full bg-white rounded-xl shadow-lg p-4">
      {/* ✅ Top section with circular course image */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 shadow-md">
          <img
            src={courseImage}
            alt={courseTitle}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{episode.title}</h2>
          <p className="text-gray-500 text-sm">
            Course:{" "}
            <span className="font-medium text-gray-700">{courseTitle}</span>
          </p>
        </div>
      </div>

      {/* ✅ Video iframe */}
      <div className="w-full h-135 bg-black rounded-lg overflow-hidden">
        <iframe
          src={getEmbedUrl(episode.videoUrl)}
          title={episode.title}
          className="w-full h-full rounded-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* ✅ Description */}
      <p className="text-gray-600 mt-4 leading-relaxed">{episode.description}</p>
    </div>
  );
};

export default VideoCard;
