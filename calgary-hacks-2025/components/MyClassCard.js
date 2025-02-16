import React from "react";

const ClassCard = ({
  imageUrl,
  status,
  title,
  date,
  instructor,
  onCancel,
  waitlistPosition,
}) => {
  return (
    <div className="flex overflow-hidden flex-col grow w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
      <div className="flex flex-col text-sm font-medium text-black whitespace-nowrap bg-black bg-opacity-0">
        <div className="flex relative flex-col items-end px-20 pt-4 pb-36 w-full aspect-[2.141] max-md:pb-24 max-md:pl-5">
          <img
            loading="lazy"
            src={imageUrl}
            alt={`${title} class`}
            className="object-cover absolute inset-0 size-full"
          />
          <div
            className={`relative px-3.5 pt-1.5 pb-3 mb-0 ${
              status === "Confirmed" ? "bg-green-100" : "bg-yellow-100"
            } rounded-full max-md:mb-2.5`}
          >
            {status}
          </div>
        </div>
      </div>
      <div className="flex flex-col px-6 py-7 w-full bg-black bg-opacity-0 max-md:px-5">
        <div className="self-start text-lg font-semibold leading-none text-black">
          {title}
        </div>
        <div className="flex gap-2 py-1 mt-5 w-full bg-black bg-opacity-0">
          <div className="flex overflow-hidden justify-center items-center self-start min-h-[16px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/609d300eb1ffd5a392d64b498d1c9e3eac4051dcea5579d09841d1e9f43b2678?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
          <div className="flex-auto text-base leading-none text-black w-[336px]">
            {date}
          </div>
        </div>
        <div className="flex gap-2.5 py-1 mt-2 w-full bg-black bg-opacity-0">
          <div className="flex overflow-hidden justify-center items-center self-start min-h-[16px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1f9df2cb7b49b5cbc9c24e2f0d6e4dc330bbce682bf1c767dbc17303320647d?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
              alt=""
              className="object-contain self-stretch my-auto w-3.5 aspect-[0.87]"
            />
          </div>
          <div className="flex-auto text-base leading-none text-black w-[336px]">
            {instructor}
          </div>
        </div>
        {status === "Confirmed" ? (
          <button
            onClick={onCancel}
            className="px-16 py-3.5 mt-4 text-base text-center text-black bg-white rounded-lg border border-red-500 border-solid max-md:px-5"
          >
            Cancel Booking
          </button>
        ) : (
          <div className="px-16 pt-px pb-2 mt-4 text-sm text-center text-black bg-black bg-opacity-0 max-md:px-5">
            You are #{waitlistPosition} on the waitlist
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassCard;
