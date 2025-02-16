import React from "react";

const InstructorInfo = () => {
  return (
    <section className="p-6 mb-6 bg-white rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <h3 className="mb-4 text-xl font-bold">Your Instructor</h3>
      <div className="flex gap-4 mb-4">
        <img
          src="https://placehold.co/64x64/4A5568/4A5568"
          alt="Chef Marco Rossi"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <p className="mb-3 font-semibold">Chef Marco Rossi</p>
          <p>20+ years experience</p>
        </div>
      </div>
      <p>
        Master pasta maker from Florence with experience in Michelin-starred
        restaurants.
      </p>
    </section>
  );
};

export default InstructorInfo;
