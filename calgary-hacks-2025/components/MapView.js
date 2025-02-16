import React from "react";

const Map = () => {
  return (
    <div className="relative w-3/5 max-md:w-full">
      {/* Embed Google Street View using iframe */}
      <iframe
        src="https://www.google.com/maps?q=Calgary,+Canada&output=embed"
        width="100%"
        height="800"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Street View of Calgary"
      ></iframe>
      <div className="flex absolute top-4 p-2 bg-white rounded-lg right-[70px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] max-md:right-5">
        <button className="px-5 py-2.5 text-base rounded-lg cursor-pointer">
          In-Person
        </button>
        <button className="px-5 py-2.5 text-base rounded-lg cursor-pointer">
          Online
        </button>
      </div>
    </div>
  );
};

export default Map;
