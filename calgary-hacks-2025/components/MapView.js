import React from "react";

const Map = () => {
  return (
    <div className="relative w-3/5 max-md:w-full">
      <img
        src="https://placehold.co/1440x900/e6e9f0/e6e9f0"
        alt="Map of Calgary"
        className="object-cover size-full max-sm:h-[400px]"
      />
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
