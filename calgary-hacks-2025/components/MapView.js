import React from "react";

function MapView() {
  return (
    <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow w-full text-base text-center whitespace-nowrap bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex relative flex-col items-end px-16 pt-4 w-full min-h-[1280px] pb-[1208px] max-md:pb-24 max-md:pl-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/caa1143e8ca995e50edb613e85ee4baab107f59d87669569280c841005e34312?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
            className="object-cover absolute inset-0 size-full"
            alt="Map view of cooking class locations"
          />
          <div className="flex relative gap-1.5 p-2 mb-0 bg-white rounded-lg shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:mb-2.5">
            <div className="px-5 pt-2.5 pb-5 text-black bg-orange-600 rounded-lg">
              In-Person
            </div>
            <div className="px-4 pt-2.5 pb-5 text-black bg-gray-100 rounded-none">
              Online
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapView;
