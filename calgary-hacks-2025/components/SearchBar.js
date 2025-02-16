import React from "react";

function SearchBar() {
  return (
    <div className="flex flex-col self-stretch bg-black bg-opacity-0">
      <div className="flex gap-4 px-3 py-3.5 w-full bg-white rounded-lg border border border-solid">
        <div className="flex overflow-hidden justify-center items-center self-start min-h-[16px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/013c6e04c351c83e2d04df51e891db1cdc82e70be1a324b2d62a3ae75fd413fd?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
            alt=""
            className="object-contain self-stretch my-auto w-3 aspect-[0.75]"
          />
        </div>
        <input
          type="text"
          placeholder="Search location..."
          className="grow shrink text-base text-black w-[238px] bg-transparent border-none outline-none"
          aria-label="Search location"
        />
      </div>
    </div>
  );
}

export default SearchBar;
