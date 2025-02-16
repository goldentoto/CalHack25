import React from "react";

function ItalianPastaMaking() {
  return (
    <div className="flex overflow-hidden flex-col bg-white rounded-lg border-2 border-gray-300 border-solid">
      <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex flex-col justify-center items-center px-20 w-full bg-black bg-opacity-50 py-[468px] max-md:px-5 max-md:py-24 max-md:max-w-full">
          <div className="flex flex-col mb-0 max-w-full bg-white rounded-2xl w-[512px] max-md:mb-2.5">
            <div className="flex overflow-hidden flex-col text-sm text-black rounded-2xl bg-black bg-opacity-0 max-md:max-w-full">
              <div className="flex relative flex-col w-full min-h-[192px] max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f9b6fcd4aa89b8681179d69cf053b91e45bcab4f47dd2a38a9e2e7042ca0482?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
                  alt="Italian Pasta Making background"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col px-4 py-4 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/089f7ea0d05e6e43315620ddaef4fb3c78284e7ddb2bcafcefa7f713c0c13712?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
                    alt=""
                    className="object-contain self-end aspect-[0.75] w-[15px]"
                  />
                  <div className="flex flex-col mt-28 max-w-full bg-black bg-opacity-0 w-[157px] max-md:mt-10">
                    <div className="px-12 pt-1 pb-2.5 bg-emerald-500 rounded-full max-md:px-5">
                      4 credits
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-6 py-6 bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
              <h1 className="self-start text-2xl font-semibold leading-none text-black">
                Italian Pasta Making
              </h1>
              <div className="flex gap-3 pr-20 mt-6 w-full bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full">
                <div className="flex overflow-hidden justify-center items-center self-start mt-1 min-h-[16px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf7a22c2d3ee7ae71fc163396e15f973234f9b16045998d0d0e1ac050f550daa?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
                    alt=""
                    className="object-contain self-stretch my-auto w-3 aspect-[0.75]"
                  />
                </div>
                <div className="flex flex-col py-1 leading-none bg-black bg-opacity-0">
                  <div className="text-base font-medium text-black">
                    Downtown Calgary, AB
                  </div>
                  <div className="self-start mt-2 text-sm text-black">
                    123 Culinary Street
                  </div>
                </div>
              </div>
              <div className="flex gap-3 pr-20 mt-4 w-full bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full">
                <div className="flex overflow-hidden justify-center items-center self-start mt-1 min-h-[16px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bbd1d1e356c85e11742b1827540520334ad69d1835dfa1d6b95bed33633e2a6?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
                    alt=""
                    className="object-contain self-stretch my-auto w-3.5 aspect-[0.87]"
                  />
                </div>
                <div className="flex flex-col pt-0.5 pb-2.5 leading-none bg-black bg-opacity-0">
                  <div className="text-base font-medium text-black">
                    Monday, February 17
                  </div>
                  <div className="self-start mt-2 text-sm text-black">
                    4:30 PM - 5:30 PM
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-1 mt-8 text-center bg-black bg-opacity-0 max-md:max-w-full">
                <button className="px-12 pt-3.5 pb-6 text-base font-medium text-black bg-red-50 rounded-xl max-md:px-5 max-md:max-w-full">
                  Cancel this reservation
                </button>
                <div className="self-center mt-3.5 text-sm leading-none text-black">
                  We'll refund your 4 credits
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItalianPastaMaking;
