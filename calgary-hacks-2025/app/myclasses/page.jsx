import React from "react";
import FilterButton from "../components/FilterButton";
import ClassCard from "../components/MyClassCard";

const classData = [
  {
    imageUrl:"/italianclass.jpg",
    status: "Confirmed",
    title: "Italian Pasta Masterclass",
    date: "March 15, 2025 • 2:00 PM",
    instructor: "Chef Maria Rodriguez",
  },
  {
    imageUrl:
      "/meal.jpg",
    status: "Confirmed",
    title: "Weekly Meal Prep Basics",
    date: "March 20, 2025 • 10:00 AM",
    instructor: "Chef John Smith",
  },
  {
    imageUrl:
      "/sushim.jpg",
    status: "Waitlist",
    title: "Sushi Making Workshop",
    date: "March 25, 2025 • 6:00 PM",
    instructor: "Chef Lisa Chen",
    waitlistPosition: 2,
  },
];

function MyClasses() {
  return (
    <div className="flex flex-col bg-black bg-opacity-0">
      <div className="flex flex-col px-20 pt-6 pb-36 w-full bg-gray-50 max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col items-start pr-20 pb-2 leading-none text-black bg-black bg-opacity-0 max-md:pr-5 max-md:mr-0.5 max-md:max-w-full">
          <h1 className="text-3xl font-bold">My Classes</h1>
          <p className="mt-5 text-base">
            Track your cooking journey and upcoming sessions
          </p>
        </div>
        <div className="flex flex-col mt-8 mb-0 w-full bg-black bg-opacity-0 max-md:mb-2.5 max-md:max-w-full">
          <div className="flex flex-wrap gap-4 pr-20 bg-black bg-opacity-0 max-md:pr-5 max-md:mr-0.5">
            <FilterButton
              label="All Class Types"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ca83ee75207842e3223c65cbd00b9e0eac887eeffca04b9aae14040b1562840a?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
            />
            <FilterButton
              label="All Instructors"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ca83ee75207842e3223c65cbd00b9e0eac887eeffca04b9aae14040b1562840a?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
            />
            <FilterButton
              label="Sort by Date"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ca83ee75207842e3223c65cbd00b9e0eac887eeffca04b9aae14040b1562840a?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
            />
          </div>
          <div className="flex flex-col justify-center py-px mt-6 w-full text-base text-center border border-b bg-black bg-opacity-0 max-md:mr-0.5 max-md:max-w-full">
            <div className="flex flex-wrap gap-8 pr-20 bg-black bg-opacity-0 max-md:pr-5">
              <div className="px-1.5 pt-0.5 pb-6 font-medium text-black border-b-2 border-orange-500 bg-black bg-opacity-0">
                Upcoming Classes
              </div>
              <div className="px-1.5 pt-1 pb-7 text-black bg-black bg-opacity-0">
                Past Classes
              </div>
            </div>
          </div>
          <div className="p-0.5 mt-6 bg-black bg-opacity-0 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {classData.map((classItem, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                >
                  <ClassCard
                    imageUrl={classItem.imageUrl}
                    status={classItem.status}
                    title={classItem.title}
                    date={classItem.date}
                    instructor={classItem.instructor}
                    onCancel={() =>
                      console.log(`Cancelling ${classItem.title}`)
                    }
                    waitlistPosition={classItem.waitlistPosition}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyClasses;
