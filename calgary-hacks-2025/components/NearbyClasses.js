import React from "react";
import ClassCard from "./ClassCard";

function NearbyClasses() {
  const classes = [
    {
      title: "Sushi Making Masterclass",
      image: "/images/sushi-class.jpg",
      price: 89,
      rating: 4.8,
      reviews: 124,
      description: "Learn the art of sushi making from expert chefs.",
      instructor: { name: "Chef Tanaka" },
      duration: "2 hours",
    },
    {
      title: "French Pastry Basics",
      image: "/images/french-pastry-class.jpg",
      price: 95,
      rating: 4.6,
      reviews: 89,
      description: "Master the fundamentals of French pastry making.",
      instructor: { name: "Chef Marie" },
      duration: "3 hours",
    },
    {
      title: "Thai Cuisine Workshop",
      image: "/images/thai-cuisine-class.jpg",
      price: 79,
      rating: 4.7,
      reviews: 156,
      description:
        "Explore the flavors of Thai cuisine in this hands-on workshop.",
      instructor: { name: "Chef Supaporn" },
      duration: "2.5 hours",
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
            {classes.map((classItem, index) => (
              <ClassCard key={index} {...classItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NearbyClasses;
