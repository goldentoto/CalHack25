import Image from "next/image";

export default function ClassCard({
  image,
  price,
  rating,
  reviews,
  title,
  description,
  instructor,
  duration,
}) {
  return (
    <div className="overflow-hidden grow w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
      <div className="text-sm font-medium text-black whitespace-nowrap">
        <div className="flex relative flex-col items-end px-20 pt-4 pb-36 w-full aspect-[2.057]">
          <Image
            src="file.svg"
            alt={title}
            width={18}
            height={18}
            className="object-cover absolute inset-0"
          />
          <div className="relative px-3.5 py-2 mb-0 bg-white rounded-full">
            ${price}
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6">
        <div className="flex gap-2.5 py-1 pr-16">
          <div className="flex self-start">
            <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
              <Image
                src="file.svg"
                alt="Rating star"
                width={18}
                height={18}
                className="object-contain"
              />
            </div>
            <div className="text-base leading-none text-black">{rating}</div>
          </div>
          <div className="flex gap-3.5 text-base leading-none">
            <div className="text-black">|</div>
            <div className="text-black">{reviews} reviews</div>
          </div>
        </div>
        <div className="self-start mt-2.5 text-xl font-bold leading-none text-black">
          {title}
        </div>
        <div className="mt-5 text-base leading-4 text-black">{description}</div>
        <div className="flex gap-5 justify-between mt-7 w-full text-sm leading-none">
          <div className="flex gap-2 text-black">
            <Image
              src="file.svg"
              alt={instructor.name}
              width={32}
              height={32}
              className="object-contain rounded-full"
            />
            <div className="my-auto">{instructor.name}</div>
          </div>
          <div className="my-auto text-black">{duration}</div>
        </div>
      </div>
    </div>
  );
}
