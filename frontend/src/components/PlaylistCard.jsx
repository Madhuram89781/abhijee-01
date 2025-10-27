import React from "react";

const PlaylistCard = ({ episodes, onSelectEpisode }) => {
  if (!episodes || episodes.length === 0)
    return <div className="p-4 text-gray-600">No episodes available</div>;

  return (
    <div className="bg-gray-100 rounded-xl shadow-md p-4 h-full overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4">Course Playlist</h3>
      <ul>
        {episodes.map((ep, index) => (
          <li
            key={index}
            onClick={() => onSelectEpisode(ep)}
            className="p-3 mb-2 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-blue-100 transition-all"
          >
            <h4 className="font-medium">{ep.title}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistCard;
