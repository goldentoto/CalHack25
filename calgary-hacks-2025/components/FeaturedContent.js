import React from "react";


function FeaturedContent( {index, image} ) {
  return (
    <div className="flex relative flex-col rounded-xl min-h-[808px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] max-md:max-w-full">
      <img
        src={image}
        width={18}
        height={18}        
        alt={`Featured content ${index}`}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative shrink-0 bg-black bg-opacity-0 h-[808px] max-md:max-w-full" />
    </div>
  );
}
export default FeaturedContent;
