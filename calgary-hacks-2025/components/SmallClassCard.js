import React from "react";

function SmallClassCard({ title, distance, time, price, imageUrl }) {
  return (
    <div className="flex relative flex-col p-4 mb-0 w-80 max-w-full bg-white rounded-xl shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:mb-2.5">
      <div className="flex flex-col text-sm text-black whitespace-nowrap bg-black bg-opacity-0">
        <div className="flex relative flex-col items-end px-14 pt-2 pb-32 w-full rounded-lg aspect-[1.8] max-md:pb-24 max-md:pl-5">
          <img
            loading="lazy"
            src={imageUrl}
            alt={title}
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative px-2.5 pt-1.5 pb-3 mb-0 bg-green-500 rounded-md max-md:mb-2.5">
            Available
          </div>
        </div>
      </div>
      <div className="py-1.5 mt-3 text-lg font-semibold text-black bg-black bg-opacity-0 max-md:pr-5">
        {title}
      </div>
      <div className="flex gap-2 py-0.5 mt-2 w-full bg-black bg-opacity-0">
        <div className="flex overflow-hidden justify-center items-center self-start min-h-[14px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/32a2b3de0bc262eaf56f7c8f55e863a938fe206699ac04b287a4d4a7a0237462?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
            alt=""
            className="object-contain self-stretch my-auto aspect-[0.79] w-[11px]"
          />
        </div>
        <div className="flex-auto text-sm leading-none text-black w-[267px]">
          {distance}
        </div>
      </div>
      <div className="flex gap-2 py-0.5 mt-2 w-full bg-black bg-opacity-0">
        <div className="flex overflow-hidden justify-center items-center self-start min-h-[14px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d19be4a822955be85ef63da6a1de55919536ce7834bdebd1e718d7bc734b414?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
            alt=""
            className="object-contain self-stretch my-auto w-3.5 aspect-square"
          />
        </div>
        <div className="grow shrink text-sm leading-none text-black w-[123px]">
          {time}
        </div>
        <div className="grow shrink text-sm font-medium leading-none text-black w-[125px]">
          {price}
        </div>
      </div>
      <button className="px-16 pt-2.5 pb-5 mt-3 text-base text-center text-black bg-orange-500 rounded-lg max-md:px-5">
        View Details
      </button>
    </div>
  );
}

export default SmallClassCard;
