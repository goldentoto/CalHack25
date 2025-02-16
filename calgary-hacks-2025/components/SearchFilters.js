
function SearchFilters() {
  return (
    <div className="flex flex-col justify-center px-20 py-px mt-2 w-full bg-white border border-b max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center px-4 py-3 w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap gap-4 items-start pr-20 bg-black bg-opacity-0 max-md:pr-5">
          <div className="flex flex-col self-stretch bg-black bg-opacity-0">
            <div className="flex gap-4 px-3 py-3.5 w-full bg-white rounded-lg border border border-solid">
              <div className="flex overflow-hidden justify-center items-center self-start min-h-[16px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/013c6e04c351c83e2d04df51e891db1cdc82e70be1a324b2d62a3ae75fd413fd?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823"
                  className="object-contain self-stretch my-auto w-3 aspect-[0.75]"
                  alt=""
                />
              </div>
              <input
                type="text"
                placeholder="Search location..."
                className="grow shrink text-base text-black w-[238px] bg-transparent border-none focus:outline-none"
                aria-label="Search location"
              />
            </div>
          </div>
          <FilterButton text="Cuisine Type" />
          <FilterButton text="Price Range" />
          <FilterButton text="Difficulty Level" />
          <button className="flex gap-2 px-4 py-2.5 text-base text-center text-black bg-orange-500 rounded-lg">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9655391d6f9d5d4b2f47cd017d9aaafd8c2ffc18e48d7ccf871505979086971b?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823"
              className="object-contain shrink-0 w-4 aspect-[0.8]"
              alt=""
            />
            <span>Apply Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function FilterButton({ text }) {
  return (
    <button className="flex gap-3.5 px-2.5 py-2 text-base text-black bg-white rounded-lg border border border-solid">
      <span className="my-auto">{text}</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/75a82da1863e6c4c2be634f4371c93f1777d66308059f54ca8c339a2a54223a9?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823"
        className="object-contain shrink-0 w-6 aspect-square"
        alt=""
      />
    </button>
  );
}

export default SearchFilters;