
const PointsRedemption = () => {
    return (
    <div className="flex flex-col justify-center px-20 py-12 w-full bg-orange-50 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center px-20 pt-1.5 pb-6 bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center p-8 max-w-full bg-white rounded-2xl shadow-[0px_4px_6px_rgba(0,0,0,0.1)] w-[896px] max-md:px-5">
          <div className="w-full bg-black bg-opacity-0 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start py-px mx-auto w-full bg-black bg-opacity-0 max-md:mt-8">
                <h3 className="text-2xl font-bold leading-none text-black">Got CookPrep Points?</h3>
                <p className="mt-6 text-base leading-4 text-black">
                  Redeem your points for exclusive discounts on memberships
                </p>
                <div className="flex gap-2 self-stretch py-1 mt-7 w-full bg-black bg-opacity-0">
                  <div className="flex overflow-hidden justify-center items-center self-start min-h-[16px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/203e325552f522e4ee06b0a8c40f221b37aea8a7a45c5750a3838a9624fc5c57?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823"
                      className="object-contain self-stretch my-auto aspect-[1.12] w-[18px]"
                      alt=""
                    />
                </div>
                  <div className="flex-auto text-base font-semibold leading-none text-black w-[376px]">
                    2,500 points = 10% off
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <form className="flex gap-4 self-stretch my-auto w-full text-base text-black bg-black bg-opacity-0 max-md:mt-10">
                <label htmlFor="pointsCode" className="sr-only">Enter points code</label>
                <input
                  id="pointsCode"
                  type="text"
                  className="grow px-4 py-3.5 bg-white rounded-lg border border-solid w-fit max-md:pr-5"
                  placeholder="Enter points code"
                />
                <button type="submit" className="self-start px-7 pt-2.5 pb-5 text-center whitespace-nowrap bg-orange-500 rounded-lg max-md:px-5">
                  Redeem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PointsRedemption;