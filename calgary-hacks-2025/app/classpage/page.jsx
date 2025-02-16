import React from "react";
import Header from "../../components/Header";
import HeroImage from "../../components/HeroImage";
import ClassDetails from "../../components/ClassDetails";
import InstructorInfo from "../../components/InstructorInfo";
import LocationInfo from "../../components/LocationInfo";
import StudentReviews from "../../components/StudentReviews";
import PreparationInfo from "../../components/PreparationInfo";
import Footer from "../../components/Footer";

const CookingClassPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <HeroImage />
      <div className="px-20 py-16 bg-gray-50 max-md:px-5 max-md:py-10">
        <div className="grid gap-5 mx-auto my-0 grid-cols-[2fr_1fr] max-w-[1440px] max-md:grid-cols-[1fr]">
          <ClassDetails />
          <div>
            <InstructorInfo />
            <LocationInfo />
          </div>
        </div>
      </div>
      <StudentReviews />
      <PreparationInfo />
      <Footer />
    </div>
  );
};

export default CookingClassPage;
