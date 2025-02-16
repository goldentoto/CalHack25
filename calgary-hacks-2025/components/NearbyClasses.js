
const nearbyClassesData = [
  {
    id: 1,
    title: "Sushi Making Masterclass",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c14f4da1420b3da66fa6829d0f93f5bfbc46000af9741e7fa9b3f0adbc63a8aa?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823",
    badge: { text: "Popular", color: "bg-orange-500" },
    rating: "4.8",
    reviews: "124",
    price: "$89"
  },
  {
    id: 2,
    title: "French Pastry Basics",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e2c9929c67409d2fa29e80c16caed6feaff8c02a7a7e6371d5d1cf2b3056cb96?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823",
    badge: { text: "New", color: "bg-green-500" },
    rating: "4.6",
    reviews: "89",
    price: "$95"
  },
  {
    id: 3,
    title: "Thai Cuisine Workshop",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b49d9c46d002d31e395e15d18413311c6469cfcde6b79f3f5bae1a3dd5a30b6d?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823",
    rating: "4.7",
    reviews: "156",
    price: "$79"
  }
];

function NearbyClasses() {
  return (
    <div className="flex flex-col justify-center px-20 py-6 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col px-4 py-px w-full bg-black bg-opacity-0 max-md:max-w-full">
        <h2 className="self-start text-xl font-semibold leading-none text-black">
          Nearby Classes
        </h2>
        <div className="overflow-hidden pr-20 pb-4 mt-6 bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {nearbyClassesData.map((classItem) => (
              <ClassCard key={classItem.id} {...classItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ClassCard({ title, image, badge, rating, reviews, price }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow p-px w-full bg-white rounded-xl border border border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:mt-4">
        <div className="flex flex-col text-sm text-black whitespace-nowrap bg-black bg-opacity-0">
          <div className="flex relative flex-col items-end px-14 pt-2 pb-32 w-full rounded-xl aspect-[1.738] max-md:pb-24 max-md:pl-5">
            <img
              loading="lazy"
              src={image}
              className="object-cover absolute inset-0 size-full"
              alt={title}
            />
            {badge && (
              <div className={`relative px-2.5 py-2 mb-0 ${badge.color} rounded-md max-md:mb-2.5`}>
                {badge.text}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col px-4 py-4 w-full bg-black bg-opacity-0">
          <h3 className="self-start text-base font-semibold leading-none text-black">
            {title}
          </h3>
          <div className="flex gap-1 py-0.5 mt-3.5 w-full bg-black bg-opacity-0">
            <div className="flex overflow-hidden justify-center items-center self-start min-h-[14px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e7d5edfe541485d9ca4d52a191c86c2c164d6deb16bd7a600c5c1d50969f872?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823"
                className="object-contain self-stretch my-auto w-4 aspect-[1.14]"
                alt=""
              />
            </div>
            <div className="grow shrink text-sm leading-none text-black w-[223px]">
              {rating} ({reviews} reviews)
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-2 text-base bg-black bg-opacity-0">
            <div className="my-auto font-medium leading-none text-black">
              {price}
            </div>
            <button className="px-4 pt-2.5 pb-5 text-center text-black bg-orange-500 rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NearbyClasses;