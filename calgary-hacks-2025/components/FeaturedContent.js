import PropTypes from "prop-types";
import React from "react";
import { LuBookmark, LuHeart, LuMessageCircle, LuSend } from "react-icons/lu";

function FeaturedContent({ index, image, user, profilePic, timeAgo, caption, likes, comments }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      {/* Post Header */}
      <div className="flex items-center px-4 py-3">
        <img
          src={profilePic}
          alt={user}
          className="w-10 h-10 rounded-full object-cover border border-gray-300"
        />
        <div className="ml-3">
          <p className="font-semibold text-gray-800">{user}</p>
          <p className="text-xs text-gray-500">{timeAgo}</p>
        </div>
      </div>

      {/* Post Image */}
      <img src={image} alt={`Featured content ${index}`} className="w-full object-cover" />

      {/* Post Actions */}
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex space-x-4">
          <LuHeart className="w-6 h-6 text-gray-600 hover:text-red-500 cursor-pointer" />
          <LuMessageCircle className="w-6 h-6 text-gray-600 hover:text-blue-500 cursor-pointer" />
          <LuSend className="w-6 h-6 text-gray-600 hover:text-green-500 cursor-pointer" />
        </div>
        <LuBookmark className="w-6 h-6 text-gray-600 hover:text-yellow-500 cursor-pointer" />
      </div>

      {/* Likes & Caption */}
      <div className="px-4 py-2 text-gray-600">
        <p className="font-semibold text-gray-600">{likes} likes</p>
        <p>
          <span className="font-semibold text-gray-600">{user}</span> {caption}
        </p>
      </div>

      {/* Comments Section */}
      <div className="px-4 py-2 text-sm text-gray-500">
        {comments.length > 0 && (
          <p className="cursor-pointer text-gray-600">View all {comments.length} comments</p>
        )}
        {comments.slice(0, 2).map((comment, i) => (
          <p key={i}>
            <span className="font-semibold text-gray-600">{comment.user}</span> {comment.text}
          </p>
        ))}
      </div>

      {/* Add a Comment */}
      <div className="px-4 py-3 border-t border-gray-200">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full text-sm p-2 focus:outline-none"
        />
      </div>
    </div>
  );
}

FeaturedContent.propTypes = {
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeaturedContent;
