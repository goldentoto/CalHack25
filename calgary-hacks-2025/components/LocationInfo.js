import React from "react";

const locationDetails = [
  { icon: "ti ti-map-pin", content: "123 Culinary Street, Milan" },
  { icon: "ti ti-phone", content: "+39 123 456 789" },
  { icon: "ti ti-world", content: "www.cookmaster.com" },
  { icon: "ti ti-brand-instagram", content: "@cookmaster" },
];

const LocationInfo = () => {
  return (
    <section className="p-6 mb-6 bg-white rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-black">
      <h3 className="mb-4 text-xl font-bold">Location</h3>
      <div
        className="mb-4 h-48 bg-gray-200 rounded-lg"
        aria-label="Map of cooking class location"
      />
      <div>
        {locationDetails.map((detail, index) => (
          <div key={index} className="flex gap-2 items-center mb-3.5">
            <i className={`${detail.icon} text-black`} aria-hidden="true" />
            <span>{detail.content}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationInfo;
