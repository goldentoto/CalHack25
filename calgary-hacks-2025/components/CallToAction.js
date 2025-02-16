import React from "react";

function CallToAction() {
  return (
    <div className="flex flex-col justify-center px-20 py-16 w-full text-base text-center text-black bg-orange-600 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center px-20 max-md:px-5 max-md:max-w-full">
        <div className="flex z-10 flex-col items-center max-w-full w-[666px]">
          <div className="self-stretch text-4xl font-bold leading-none max-md:max-w-full">
            Ready to Start Your Culinary Journey?
          </div>
          <div className="mt-6 leading-none max-md:max-w-full">
            Join thousands of food enthusiasts learning from the best chefs in
            your city
          </div>
          <button className="px-8 py-4 mt-10 max-w-full text-black bg-white rounded-full w-[200px] max-md:px-5">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}
export default CallToAction;
