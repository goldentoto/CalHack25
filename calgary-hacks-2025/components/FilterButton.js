import React from "react";

const FilterButton = ({ label, icon }) => {
  return (
    <div className="flex flex-col bg-black bg-opacity-0">
      <div className="flex gap-5 justify-between px-2.5 py-2 bg-white rounded-lg border border-gray-300 border-solid">
        <div className="my-auto text-base text-black">{label}</div>
        <div className="flex overflow-hidden relative flex-col justify-center items-start px-1.5 py-1.5 aspect-square w-[26px]">
          <img
            loading="lazy"
            src="file.svg"
            width={18}
            height={18}
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex overflow-hidden relative justify-center items-center min-h-[16px]">
            <img
              loading="lazy"
              src={icon}
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterButton;
