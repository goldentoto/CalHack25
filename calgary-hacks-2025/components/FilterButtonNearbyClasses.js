import React from "react";

function FilterButtonNearbyClasses({ name }) {
  return (
    <button className="flex gap-3.5 px-2.5 py-2 text-base text-black bg-white rounded-lg border border border-solid">
      <span className="my-auto">{name}</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/75a82da1863e6c4c2be634f4371c93f1777d66308059f54ca8c339a2a54223a9?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
        alt=""
        className="object-contain shrink-0 w-6 aspect-square"
      />
    </button>
  );
}

export default FilterButtonNearbyClasses;
