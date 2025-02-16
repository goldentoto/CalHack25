import Image from "next/image";
import LocationSearch from "./LocationSearch";

export default function Hero() {
  return (
    <div className="self-center px-4 mt-7 max-w-full w-[1289px]">
      <div className="w-full max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto mr-0 w-full max-md:mt-10 max-md:max-w-full">
                <div className="z-10 self-start text-6xl font-bold text-black leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  Master the Art of Cooking
                </div>
                <div className="mt-6 text-xl leading-5 text-black max-md:mr-2.5 max-md:max-w-full">
                  Join expert-led cooking classes near you and discover your
                  inner chef
                </div>
                <div className="flex flex-wrap gap-4 pr-20 mt-12 text-base text-center max-md:pr-5 max-md:mt-10">
                  <button className="px-9 py-5 text-black bg-orange-600 rounded-full max-md:px-5">
                    Explore Classes
                  </button>
                  <button className="px-9 py-5 text-black rounded-full border border-gray-300 border-solid max-md:px-5">
                    View Pricing
                  </button>
                </div>
              </div>
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <Image
                src="file.svg"
                alt="Cooking class"
                width={600}
                height={571}
                className="object-contain grow w-full aspect-[1.05] max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <LocationSearch />
      </div>
    </div>
  );
}
