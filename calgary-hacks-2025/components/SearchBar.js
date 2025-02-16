import React from "react";

const SearchSection = () => {
  return (
    <>
      <form className="mb-6">
        <label htmlFor="searchInput" className="sr-only">
          Search cooking classes
        </label>
        <div className="flex gap-3 items-center px-3 py-4 rounded-lg border border-solid">
          <i className="ti ti-search text-gray-500" />
          <input
            id="searchInput"
            placeholder="Search cooking classes, baking workshops, culinary lessons"
            className="w-full text-base border-[none]"
          />
        </div>
      </form>
      <div className="flex flex-wrap gap-2 mb-6 max-sm:overflow-x-auto max-sm:flex-nowrap max-sm:pb-2">
        <button className="flex gap-2 items-center px-4 py-2.5 text-base bg-gray-100 rounded-full">
          <i className="ti ti-category" />
          <span>All Cuisines</span>
        </button>
        <button className="flex gap-2 items-center px-4 py-2.5 text-base bg-gray-100 rounded-full">
          <i className="ti ti-chart-dots" />
          <span>Skill Level</span>
        </button>
        <button className="flex gap-2 items-center px-4 py-2.5 text-base bg-gray-100 rounded-full">
          <i className="ti ti-map-pin" />
          <span>Price Range</span>
        </button>
      </div>
    </>
  );
};

export default SearchSection;
