import React from "react";
import Image from "next/image";

function SearchBar() {
  return (
    <div className="flex flex-col justify-center px-20 py-px mt-2 w-full bg-white border border-b max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center px-4 py-3 w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap gap-4 items-start pr-20 bg-black bg-opacity-0 max-md:pr-5">
          <div className="flex flex-col self-stretch bg-black bg-opacity-0">
            <div className="flex gap-4 px-3 py-3.5 w-full bg-white rounded-lg border border border-solid">
              <div className="flex overflow-hidden justify-center items-center self-start min-h-[16px]">
                <Image
                  src="/images/search-icon.svg"
                  alt="Search icon"
                  width={12}
                  height={16}
                  className="object-contain self-stretch my-auto w-3 aspect-[0.75]"
                />
              </div>
              <input
                type="text"
                placeholder="Search location..."
                className="grow shrink text-base text-black w-[238px] bg-transparent border-none focus:outline-none"
                aria-label="Search location"
              />
            </div>
          </div>
          <button className="flex gap-3.5 px-2.5 py-2 text-base text-black bg-white rounded-lg border border border-solid">
            <span className="my-auto">Cuisine Type</span>
            <Image
              src="/images/dropdown-icon.svg"
              alt="Dropdown icon"
              width={24}
              height={24}
              className="object-contain shrink-0 w-6 aspect-square"
            />
          </button>
          <button className="flex gap-3.5 px-2.5 py-2 text-base text-black bg-white rounded-lg border border border-solid">
            <span className="my-auto">Price Range</span>
            <Image
              src="/images/dropdown-icon.svg"
              alt="Dropdown icon"
              width={24}
              height={24}
              className="object-contain shrink-0 w-6 aspect-square"
            />
          </button>
          <button className="flex gap-3.5 px-2.5 py-2 text-base text-black bg-white rounded-lg border border border-solid">
            <span className="grow my-auto">Difficulty Level</span>
            <Image
              src="/images/dropdown-icon.svg"
              alt="Dropdown icon"
              width={24}
              height={24}
              className="object-contain shrink-0 w-6 aspect-square"
            />
          </button>
          <button className="flex gap-2 px-4 py-2.5 text-base text-center text-black bg-orange-500 rounded-lg">
            <Image
              src="/images/filter-icon.svg"
              alt="Filter icon"
              width={16}
              height={20}
              className="object-contain shrink-0 w-4 aspect-[0.8]"
            />
            <span>Apply Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
