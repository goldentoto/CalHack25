import React from "react";

function FilterTags() {
  return (
    <div className="flex flex-col mt-6 text-base text-center text-black bg-black bg-opacity-0 max-md:max-w-full">
      <div className="flex flex-col items-start pr-20 w-full bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-2">
          <div className="flex gap-2 px-4 py-2.5 text-black bg-orange-100 rounded-full">
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
              className="object-contain shrink-0 w-4 aspect-[0.8]"
            >
              <path d="M3 6h18"></path>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
              <line x1="8" y1="11" x2="16" y2="11"></line>
              <line x1="8" y1="15" x2="16" y2="15"></line>
              <line x1="10" y1="19" x2="14" y2="19"></line>
            </svg>
            <div>Cuisine Type</div>
          </div>
          <div className="flex gap-2.5 px-4 py-2.5 bg-gray-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="object-contain shrink-0 w-3.5 aspect-[0.7]"
            >
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <div>Price Range</div>
          </div>
          <div className="flex gap-2.5 px-4 py-2.5 whitespace-nowrap bg-gray-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="object-contain shrink-0 w-3 aspect-[0.6]"
            >
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
            <div>Difficulty Level</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterTags;
