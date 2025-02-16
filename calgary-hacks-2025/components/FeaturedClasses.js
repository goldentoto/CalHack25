import React from "react";
import Image from "next/image";

function FeaturedClass() {
  return (
    <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
      <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex relative flex-col items-end px-20 pt-4 pb-36 w-full min-h-[500px] max-md:pb-24 max-md:pl-5 max-md:max-w-full">
          <Image
            src="/images/featured-class-background.jpg"
            alt="Featured cooking class background"
            layout="fill"
            objectFit="cover"
          />
          <div className="flex relative flex-col p-4 mb-0 w-80 max-w-full bg-white rounded-xl shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:mb-2.5">
            <div className="flex flex-col text-sm text-black whitespace-nowrap bg-black bg-opacity-0">
              <div className="flex relative flex-col items-end px-14 pt-2 pb-32 w-full rounded-lg aspect-[1.8] max-md:pb-24 max-md:pl-5">
                <Image
                  src="/images/italian-pasta-class.jpg"
                  alt="Italian Pasta Making Class"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="relative px-2.5 pt-1.5 pb-3 mb-0 bg-green-500 rounded-md max-md:mb-2.5">
                  Available
                </div>
              </div>
            </div>
            <div className="py-1.5 mt-3 text-lg font-semibold text-black bg-black bg-opacity-0 max-md:pr-5">
              Italian Pasta Making Class
            </div>
            <div className="flex gap-2 py-0.5 mt-2 w-full bg-black bg-opacity-0">
              <div className="flex overflow-hidden justify-center items-center self-start min-h-[14px]">
                <Image
                  src="/images/location-icon.svg"
                  alt="Location icon"
                  width={11}
                  height={14}
                  className="object-contain self-stretch my-auto aspect-[0.79] w-[11px]"
                />
              </div>
              <div className="flex-auto text-sm leading-none text-black w-[267px]">
                2.5 miles away
              </div>
            </div>
            <div className="flex gap-2 py-0.5 mt-2 w-full bg-black bg-opacity-0">
              <div className="flex overflow-hidden justify-center items-center self-start min-h-[14px]">
                <Image
                  src="/images/calendar-icon.svg"
                  alt="Calendar icon"
                  width={14}
                  height={14}
                  className="object-contain self-stretch my-auto w-3.5 aspect-square"
                />
              </div>
              <div className="grow shrink text-sm leading-none text-black w-[123px]">
                Tomorrow, 2:00 PM
              </div>
              <div className="grow shrink text-sm font-medium leading-none text-black w-[125px]">
                $75
              </div>
            </div>
            <button className="px-16 pt-2.5 pb-5 mt-3 text-base text-center text-black bg-orange-500 rounded-lg max-md:px-5">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedClass;
