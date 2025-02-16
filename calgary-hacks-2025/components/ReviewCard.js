import React from "react";
import PropTypes from "prop-types";

const ReviewCard = ({ name, image, content }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] max-sm:p-5">
      <div className="flex gap-4 mb-4">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="mb-2.5 font-semibold">{name}</p>
          <div className="text-orange-500" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="ti ti-star-filled" aria-hidden="true" />
            ))}
          </div>
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
};

ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ReviewCard;
