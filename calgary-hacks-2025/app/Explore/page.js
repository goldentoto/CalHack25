import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FilterButton from "../components/FilterButton";
import ClassCard from "../components/ClassCard";
import NearbyClasses from "../components/NearbyClasses";

function CookingClassesPage() {
  const filters = [
    { name: "Cuisine Type" },
    { name: "Price Range" },
    { name: "Difficulty Level" },
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-white rounded-lg border-2 border-gray-300 border-solid">
      <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex flex-col pb-96 w-full bg-gray-50 max-md:pb-24 max-md:max-w-full">
          <Header />
          <div className="flex flex-col justify-center px-20 py-px mt-2 w-full bg-white border border-b max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col justify-center px-4 py-3 w-full bg-black bg-opacity-0 max-md:max-w-full">
              <div className="flex overflow-hidden flex-wrap gap-4 items-start pr-20 bg-black bg-opacity-0 max-md:pr-5">
                <SearchBar />
                {filters.map((filter, index) => (
                  <FilterButton key={index} name={filter.name} />
                ))}
                <button className="flex gap-2 px-4 py-2.5 text-base text-center text-black bg-orange-500 rounded-lg">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbf6350b611093be581b0bcbafc7d3f0359bac8f4ad31a8020927c853be9d2ea?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
                    alt=""
                    className="object-contain shrink-0 w-4 aspect-[0.8]"
                  />
                  <span>Apply Filters</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
            <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
              <div className="flex relative flex-col items-end px-20 pt-4 pb-36 w-full min-h-[500px] max-md:pb-24 max-md:pl-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/319fda9d000518cf6334daa65564d0c0f2cbda51672974ec66c7ef961648eca4?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
                  alt="Cooking class background"
                  className="object-cover absolute inset-0 size-full"
                />
                <ClassCard
                  title="Italian Pasta Making Class"
                  distance="2.5 miles away"
                  time="Tomorrow, 2:00 PM"
                  price="$75"
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/f6dd7f1495c7ae6d9560371de8e0b6a5db140f4f7445ec4135cc1e1f1612ec07?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
                />
              </div>
            </div>
          </div>
          <NearbyClasses />
        </div>
      </div>
    </div>
  );
}

export default CookingClassesPage;
