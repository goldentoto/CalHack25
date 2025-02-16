import Image from "next/image";
import LocationSearch from "../components/LocationSearch";

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
                src="https://www.bing.com/images/search?view=detailV2&ccid=9kEYxl6e&id=B6514C3737EDC30C221ABE81B693D63615EA1693&thid=OIP.9kEYxl6e4JkVEbYvT5-ruAHaE8&mediaurl=https%3a%2f%2fchurchillmanor.com%2fwp-content%2fuploads%2f2017%2f03%2fCooking-Class-1.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.f64118c65e9ee0991511b62f4f9fabb8%3frik%3dkxbqFTbWk7aBvg%26pid%3dImgRaw%26r%3d0&exph=1000&expw=1500&q=chef+cooking+in+a+kitchen&simid=608051689484477869&FORM=IRPRST&ck=AEBC43845056A6D038A4266005DE66A8&selectedIndex=95&itb=0"
                alt="Chef cooking in a kitchen"
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
