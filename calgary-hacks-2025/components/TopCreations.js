import React from "react";
import RecipeCard from "./RecipeCard";

import router from "next/router";

function TopCreations() {

  return (
    <div className="flex flex-col justify-center px-20 py-7 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col px-2.5 py-px w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="self-start text-2xl font-bold leading-none text-black">
          Top Creations of the Week
        </div>
        <div className="px-1.5 pt-0.5 pb-2.5 mt-8 bg-black bg-opacity-0 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[33%] max-md:ml-0 max-md:w-full">
              <Link href='/classpage' className='w-block full'>
                <RecipeCard
                  title="Homemade Pasta"
                  chef="Maria"
                  imageAlt="Homemade Pasta"
                />
              </Link>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <RecipeCard
                title="Rainbow Sushi"
                chef="John"
                imageAlt="Rainbow Sushi"
              />
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <RecipeCard
                title="Berry Chocolate Cake"
                chef="Sarah"
                imageAlt="Berry Chocolate Cake"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
export default TopCreations;
