import React from "react";
import NearbyClassCard from "../components/NearbyClassCard";

function NearbyClasses() {
  const nearbyClasses = [
    {
      title: "Sushi Making Masterclass",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f4c500ce96846b809bfa030dc881eec0cb4df1ae3884ec4229e42f70b91089db?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790",
      rating: "4.8",
      reviews: "124",
      price: "$89",
      tag: { text: "Popular", color: "bg-orange-500" },
    },
    {
      title: "French Pastry Basics",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dc690f4d0468b4094ec985a7f26ebc936c8f6f893ccb32b44f19d0d4097f61a3?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790",
      rating: "4.6",
      reviews: "89",
      price: "$95",
      tag: { text: "New", color: "bg-green-500" },
    },
    {
      title: "Thai Cuisine Workshop",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/12c6b47b8912d92144d3c7f4375054d21e771c3267baf4afed36f451d217d1cc?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790",
      rating: "4.7",
      reviews: "156",
      price: "$79",
    },
  ];

  return (
    <div className="flex flex-col justify-center px-20 py-6 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col px-4 py-px w-full bg-black bg-opacity-0 max-md:max-w-full">
        <h2 className="self-start text-xl font-semibold leading-none text-black">
          Nearby Classes
        </h2>
        <div className="overflow-hidden pr-20 pb-4 mt-6 bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {nearbyClasses.map((classItem, index) => (
              <NearbyClassCard key={index} {...classItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NearbyClasses;
