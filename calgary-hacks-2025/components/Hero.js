import { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [location, setLocation] = useState('');
  const [cuisineType, setCuisineType] = useState('');

  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleCuisineTypeChange = (e) => setCuisineType(e.target.value);

  return (
    <div className="flex flex-col self-center px-4 mt-7 max-w-full bg-black bg-opacity-0 w-[1289px]">
      <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto mr-0 w-full bg-black bg-opacity-0 max-md:mt-10 max-md:max-w-full">
                <h1 className="z-10 self-start text-6xl font-bold text-black leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  Master the Art of Cooking
                </h1>
                <p className="mt-6 text-xl leading-5 text-black max-md:mr-2.5 max-md:max-w-full">
                  Join expert-led cooking classes near you and discover your inner chef
                </p>
                <div className="flex flex-wrap gap-4 pr-20 mt-12 text-base text-center bg-black bg-opacity-0 max-md:pr-5 max-md:mt-10">
                  <Link to="/explore" className="px-9 py-5 text-black bg-orange-600 rounded-full max-md:px-5">
                    Explore Classes
                  </Link>
                  <Link to="/pricing" className="px-9 py-5 text-black rounded-full border border-gray-300 border-solid bg-black bg-opacity-0 max-md:px-5">
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/abfbb345d63528703787559b7600eed2ec74ac509f5c824a3ecc0463ae9a59b3?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823"
                className="object-contain grow w-full aspect-[1.05] max-md:max-w-full"
                alt="Chef cooking in a kitchen"
              />
            </div>
          </div>
        </div>
        <div className="flex z-10 flex-col px-20 pt-11 pb-6 mr-0 mb-0 w-full bg-white max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
          <div className="flex flex-col items-center px-20 bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col px-4 pt-1.5 pb-6 max-w-full bg-black bg-opacity-0 w-[798px]">
              <form className="flex flex-col justify-center p-6 bg-white rounded-xl shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col max-w-full bg-black bg-opacity-0 w-full">
                  <div className="flex flex-col w-full bg-black bg-opacity-0">
                    <div className="flex gap-4 px-3 py-3.5 w-full bg-white rounded-lg border border border-solid mb-4">
                      <label htmlFor="locationInput" className="sr-only">Location</label>
                      <div className="flex overflow-hidden justify-center items-center self-start min-h-[16px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/633bb472ff44f25a06ac6b82b694c6204697ae396ba2714340a45a8b2d3701cf?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823"
                          className="object-contain self-stretch my-auto w-3 aspect-[0.75]"
                          alt=""
                        />
                      </div>
                      <input
                        type="text"
                        id="locationInput"
                        placeholder="Location"
                        value={location}
                        onChange={handleLocationChange}
                        className="grow shrink text-base text-black w-full bg-transparent border-none focus:outline-none"
                      />
                    </div>
                    <div className="flex gap-4 px-3 py-3.5 w-full bg-white rounded-lg border border border-solid">
                      <label htmlFor="cuisineTypeInput" className="sr-only">Cuisine Type</label>
                      <div className="flex overflow-hidden justify-center items-center self-start min-h-[16px]">
                        <img
                          loading="lazy"
                          src="http://b.io/ext_22-"
                          className="object-contain self-stretch my-auto w-3 aspect-[0.75]"
                          alt=""
                        />
                      </div>
                      <input
                        type="text"
                        id="cuisineTypeInput"
                        placeholder="Cuisine Type"
                        value={cuisineType}
                        onChange={handleCuisineTypeChange}
                        className="grow shrink text-base text-black w-full bg-transparent border-none focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;