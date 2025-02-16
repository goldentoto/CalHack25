import React from "react";
import FeaturedContent from "./FeaturedContent";

export const FeaturedSection = () => (
  <div className="flex flex-col justify-center px-20 py-7 w-full bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
    <div className="flex flex-col items-center px-20 bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
      <div className="px-1.5 pt-0.5 pb-2.5 max-w-full bg-black bg-opacity-0 w-[684px]">
        <FeaturedContent index={1} 
        image="/pizza.jpg"
        />
        <div className="mt-6">
          <FeaturedContent index={2}
          image="/bowl.jpg" />
        </div>
      </div>
    </div>
  </div>
);
export default FeaturedSection;