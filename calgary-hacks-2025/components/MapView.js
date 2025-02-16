import React from "react";

function MapView() {
  return (
    <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow w-full text-base text-center whitespace-nowrap bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex relative gap-1.5 p-2 mb-0 bg-white rounded-lg shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:mb-2.5">
          <div className="px-5 pt-2.5 pb-5 text-black bg-orange-600 rounded-lg">
            In-Person
          </div>
          <div className="px-4 pt-2.5 pb-5 text-black bg-gray-100 rounded-lg">
            Online
          </div>
        </div>
        <div className="flex relative flex-col items-end px-16 pt-4 w-full min-h-[1280px] pb-[1208px] max-md:pb-24 max-md:pl-5 max-md:max-w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000.00000000001!2d-114.071883!3d51.044733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f9e8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1633046400000!5m2!1sen!2sus"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            allowFullScreen=""
            loading="lazy"
            title="Map of Calgary"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MapView;
