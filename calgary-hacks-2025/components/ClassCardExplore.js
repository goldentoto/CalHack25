import React from "react";

const ClassCard = ({
  title,
  rating,
  reviews,
  type,
  typeClass,
  description,
  location,
  tags,
}) => {
  return (
    <div className="p-4 mb-6 rounded-lg border border-solid max-sm:p-3">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <div className="flex gap-1 items-center text-sm">
            <i className="ti ti-star-filled" />
            <span>
              {rating} ({reviews} reviews)
            </span>
          </div>
        </div>
        <div className={`px-2 py-1.5 text-sm ${typeClass} rounded-full`}>
          {type}
        </div>
      </div>
      <div className="mx-0 my-2 text-base">{description}</div>
      <div className="flex gap-2 items-center mx-0 my-3 text-sm">
        <i className={`ti ${type === "Online" ? "ti-video" : "ti-map-pin"}`} />
        <span>{location}</span>
      </div>
      <div className="flex gap-2 mb-4">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex gap-1 items-center px-2 py-1.5 text-sm bg-gray-100 rounded-full"
          >
            <i
              className={`ti ${
                tag === "Vegetarian"
                  ? "ti-leaf"
                  : tag === "Hands-on"
                  ? "ti-tools"
                  : tag === "Kit Included"
                  ? "ti-package"
                  : "ti-chart-dots"
              }`}
            />
            <span>{tag}</span>
          </div>
        ))}
      </div>
      <button className="px-5 py-2.5 text-base text-white bg-orange-600 rounded-lg cursor-pointer border-[none]">
        Book Now
      </button>
    </div>
  );
};

export default ClassCard;
