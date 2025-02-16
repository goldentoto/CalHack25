import React from "react";
import Footer from "@/components/Footer";
import ClassCardExplore from "../../components/ClassCardExplore";
import FilterTags from "../../components/FilterTags";
import Header from "../../components/Header";
import MapView from "../../components/MapView";
import SearchBar from "../../components/SearchBar";
import Image from "next/image";

const classData = [
  {
    title: "Italian Pasta Making",
    rating: "4.8",
    reviews: "124",
    type: "In-Person",
    description:
      "Learn authentic pasta making techniques from our expert chef.",
    location: "Downtown Calgary, AB",
    tags: ["Vegetarian", "Hands-on"],
  },
  {
    title: "French Pastry Basics",
    rating: "4.9",
    reviews: "89",
    type: "Online",
    description:
      "Master the art of French pastry making from your home kitchen.",
    location: "Live Online Class",
    tags: ["Kit Included", "Beginner"],
  },
];

function CookingClassesPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white rounded-lg border-2 border-gray-300 border-solid">
      <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex flex-col pb-20 w-full bg-gray-50 max-md:max-w-full">
          <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
            <Header />
            <div className="mt-1 w-full max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                  <div className="flex overflow-hidden flex-col grow px-6 pt-6 w-full bg-white pb-[634px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
                    <SearchBar />
                    <FilterTags />
                    <div className="flex flex-col mt-6 bg-black bg-opacity-0 max-md:max-w-full">
                      {classData.map((classItem, index) => (
                        <ClassCardExplore key={index} {...classItem} />
                      ))}
                    </div>
                  </div>
                </div>
                <MapView />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CookingClassesPage;
