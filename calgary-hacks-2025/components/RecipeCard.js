import Image from "next/image";
import React from "react";

function RecipeCard({ title, chef, image, imageAlt }) {
  return (
    <div className="overflow-hidden grow w-full rounded-xl shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
      <div className="relative w-full aspect-[2.057]">
        <Image
          src={image}
          alt={imageAlt}
          layout="fill" // Ensures the image fully fills the container
          objectFit="cover" // Keeps aspect ratio and fills the box
          className="rounded-t-xl"
        />
      </div>
      <div className="flex flex-col items-start py-5 px-4 bg-white">
        <div className="text-base font-bold text-black">{title}</div>
        <div className="mt-2 text-sm text-gray-600">By Chef {chef}</div>
      </div>
    </div>
  );
}

export default RecipeCard;
