import Image from "next/image";
import FormInput from "./FormInput";


export default function LocationSearch() {
  return (
    <div className="z-10 px-20 pt-11 pb-6 mr-0 mb-0 w-full bg-white max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
      <div className="flex flex-col items-center px-20 max-md:px-5 max-md:max-w-full">
        <div className="px-4 pt-1.5 pb-6 max-w-full w-[798px]">
          <div className="flex flex-col justify-center p-6 bg-white rounded-xl shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col items-start max-md:pr-5 max-md:max-w-full">
              <div className="max-w-full w-[285px]">
                <div className="w-full">
                  <div className="flex gap-4 px-3 py-3.5 w-full bg-white rounded-lg border border-solid">
                    <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
                      <Image
                        src="/location_marker.png"
                        alt="Location icon"
                        width={16}
                        height={24}
                        className="object-contain self-stretch my-auto aspect-[0.75]"
                      />
                    </div>
                    <div className="grow shrink text-gray-400 w-[231px]">
                      <FormInput
                        type="location"
                        placeholder="location"
                        id="location"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
