import React from "react";

function FilterTags() {
  return (
    <div className="flex flex-col mt-6 text-base text-center text-black bg-black bg-opacity-0 max-md:max-w-full">
      <div className="flex flex-col items-start pr-20 w-full bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-2">
          <div className="flex gap-2 px-4 py-2.5 text-black bg-orange-100 rounded-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f883329c662c19ce60e54204bf228d7d092700c21f0b7de09ac479abe0eca7c1?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
              className="object-contain shrink-0 w-4 aspect-[0.8]"
              alt=""
            />
            <div>All Cuisines</div>
          </div>
          <div className="flex gap-2.5 px-4 py-2.5 bg-gray-100 rounded-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef3c8685ec6199534e5df2c1157e8374b3656656fd4d6d8aa39f26a0db19952c?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
              className="object-contain shrink-0 w-3.5 aspect-[0.7]"
              alt=""
            />
            <div>Skill Level</div>
          </div>
          <div className="flex gap-2.5 px-4 py-2.5 whitespace-nowrap bg-gray-100 rounded-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0d2ebc9cb2b07015d07114a410a14a26c2fd02d03f8a447bf1a3b160bf08020?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
              className="object-contain shrink-0 w-3 aspect-[0.6]"
              alt=""
            />
            <div>Distance</div>
          </div>
        </div>
        <div className="flex gap-2.5 px-4 py-2.5 mt-2 whitespace-nowrap bg-gray-100 rounded-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/509d05361d4565f7c308bcd44e0e6b25267ea46e874ee96d9f6247db990564bd?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
            className="object-contain shrink-0 w-3.5 aspect-[0.7]"
            alt=""
          />
          <div>Amenities</div>
        </div>
      </div>
    </div>
  );
}

export default FilterTags;
