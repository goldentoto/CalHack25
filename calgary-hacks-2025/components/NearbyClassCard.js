import React from "react";

function NearbyClassCard({ title, imageUrl, rating, reviews, price, tag }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow p-px w-full bg-white rounded-xl border border border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:mt-4">
        <div className="flex flex-col text-sm text-black whitespace-nowrap bg-black bg-opacity-0">
          <div className="flex relative flex-col items-end px-14 pt-2 pb-32 w-full rounded-xl aspect-[1.738] max-md:pb-24 max-md:pl-5">
            <img
              loading="lazy"
              src={imageUrl}
              alt={title}
              className="object-cover absolute inset-0 size-full"
            />
            {tag && (
              <div
                className={`relative px-2.5 py-2 mb-0 ${tag.color} rounded-md max-md:mb-2.5`}
              >
                {tag.text}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col px-4 py-4 w-full bg-black bg-opacity-0">
          <h3 className="self-start text-base font-semibold leading-none text-black">
            {title}
          </h3>
          <div className="flex gap-1 py-0.5 mt-3.5 w-full bg-black bg-opacity-0">
            <div className="flex overflow-hidden justify-center items-center self-start min-h-[14px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc42a423c09bf38f3c4685ee294988fa61fd6ba64753cc2b4c3dd6d7e515bfa1?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
                alt=""
                className="object-contain self-stretch my-auto w-4 aspect-[1.14]"
              />
            </div>
            <div className="grow shrink text-sm leading-none text-black w-[223px]">
              {rating} ({reviews} reviews)
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-2 text-base bg-black bg-opacity-0">
            <div className="my-auto font-medium leading-none text-black">
              {price}
            </div>
            <button className="px-4 pt-2.5 pb-5 text-center text-black bg-orange-500 rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NearbyClassCard;
