import React from "react";

function RecipeCard({
  title,
  chef, 
  image, 
  imageAlt
}) {


return (
  <div className="overflow-hidden grow w-full leading-none text-black rounded-xl bg-black bg-opacity-0 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] max-md:mt-7">
    <img
      src={image}
      alt={imageAlt}
      layout ="fill"
      objectFit="cover" // Keeps aspect ratio and fills the box
      className="object-contain w-full aspect-[2.08]"
    />
    <div className="flex flex-col items-start py-5 pr-20 pl-4 bg-black bg-opacity-0 max-md:pr-5">
      <div className="text-base font-bold">{title}</div>
      <div className="mt-3 text-sm">By Chef {chef}</div>
    </div>
  </div>
);
}
export default RecipeCard;