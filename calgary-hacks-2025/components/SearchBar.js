import React from "react";

function SearchBar() {
  return (
    <div className="flex flex-col bg-black bg-opacity-0 max-md:max-w-full">
      <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex flex-wrap gap-3 px-3 py-4 w-full bg-white rounded-lg border border border-solid max-md:max-w-full">
          <div className="flex overflow-hidden justify-center items-center self-start min-h-[16px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="object-contain self-stretch my-auto w-4 aspect-square"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <div className="flex-auto text-base text-black w-[472px] max-md:max-w-full">
            Search cooking classes, baking workshops, culinary lessons
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
