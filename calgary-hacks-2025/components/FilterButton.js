import React from "react";

const FilterButton = ({ label, icon }) => {
  return (
    <div className="flex flex-col bg-black bg-opacity-0">
      <div className="flex gap-5 justify-between px-2.5 py-2 bg-white rounded-lg border border-gray-300 border-solid">
        <div className="my-auto text-base text-black">{label}</div>
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-1.5 py-1.5 aspect-square w-[26px]">
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


// Commented out because there was a merge conflict and I dont know which one is more up to date
// function FilterButton({ name }) {
//   return (
//     <button className="flex gap-3.5 px-2.5 py-2 text-base text-black bg-white rounded-lg border border border-solid">
//       <span className="my-auto">{name}</span>
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/75a82da1863e6c4c2be634f4371c93f1777d66308059f54ca8c339a2a54223a9?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
//         alt=""
//         className="object-contain shrink-0 w-6 aspect-square"
//       />
//     </button>
//   );
// }

export default FilterButton;
