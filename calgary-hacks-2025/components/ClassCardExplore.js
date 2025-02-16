import React from "react";

function ClassCardExplore({
  title,
  rating,
  reviews,
  type,
  description,
  location,
  tags,
}) {
  return (
    <div className="flex flex-col p-4 mt-6 w-full bg-white rounded-lg border border border-solid max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex flex-col py-0.5 bg-black bg-opacity-0">
          <div className="text-lg font-semibold leading-none text-black max-md:mr-1">
            {title}
          </div>
          <div className="flex gap-1 py-0.5 mt-3 w-full bg-black bg-opacity-0">
            <div className="flex overflow-hidden justify-center items-center self-start min-h-[14px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e344cb90a71ebe07cf19d76f547af7c613c382ef7ee4c537cfa757db289e5517?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
                className="object-contain self-stretch my-auto w-4 aspect-[1.14]"
                alt=""
              />
            </div>
            <div className="grow shrink text-sm leading-none text-black w-[152px]">
              {rating} ({reviews} reviews)
            </div>
          </div>
        </div>
        <div
          className={`self-start px-2 pt-1.5 pb-3.5 text-sm text-black whitespace-nowrap ${
            type === "In-Person" ? "bg-green-100" : "bg-blue-100"
          } rounded-full`}
        >
          {type}
        </div>
      </div>
      <div className="py-1 mt-2 text-base text-black bg-black bg-opacity-0 max-md:max-w-full">
        {description}
      </div>
      <div className="flex flex-wrap gap-2 py-0.5 mt-3 w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex overflow-hidden justify-center items-center self-start min-h-[14px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/14c2d15487981bd8fd6fccd8795cd9d2c0ebb45c7893bbbe5acd53ff429648f6?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
            className="object-contain self-stretch my-auto aspect-[0.79] w-[11px]"
            alt=""
          />
        </div>
        <div className="flex-auto text-sm leading-none text-black w-[472px] max-md:max-w-full">
          {location}
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-between mt-4 w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex gap-2 my-auto text-sm text-black whitespace-nowrap bg-black bg-opacity-0">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex gap-1 px-2 py-1.5 bg-gray-100 rounded-full"
            >
              <img
                loading="lazy"
                src={`http://b.io/ext_${8 + index}-`}
                className="object-contain shrink-0 w-3.5 aspect-[0.82]"
                alt=""
              />
              <div>{tag}</div>
            </div>
          ))}
        </div>
        <div className="px-4 pt-2.5 pb-5 text-base text-center text-black bg-orange-600 rounded-lg">
          Book Now
        </div>
      </div>
    </div>
  );
}

export default ClassCardExplore;
