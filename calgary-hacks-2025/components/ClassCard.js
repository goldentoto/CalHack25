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
      {/* Class Image */}
      <div className="relative w-full aspect-[2.057]">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
        <div className="absolute top-4 right-4 bg-white px-3.5 py-2 rounded-full text-black font-medium">
          ${price}
        </div>
      </div>

      {/* Class Details */}
      <div className="flex flex-col p-6">
        {/* Rating & Reviews */}
        <div className="flex gap-2.5 py-1 pr-16">
          <div className="flex items-center">
            <Image
              src="/star.svg"
              alt="Rating star"
              width={18}
              height={18}
              className="object-contain"
            />
            <span className="text-base text-black ml-1">{rating}</span>
          </div>
          <div className="flex gap-3.5 text-base text-black">
            <span>|</span>
            <span>{reviews} reviews</span>
          </div>
        </div>

        {/* Class Title */}
        <div className="mt-2.5 text-xl font-bold text-black">{title}</div>

        {/* Description */}
        <div className="mt-5 text-base text-black">{description}</div>

        {/* Instructor & Duration */}
        <div className="flex justify-between items-center mt-7 text-sm text-black">
          <div className="flex items-center gap-2">
            <Image
              src={instructor.image || "/default-profile.png"} // Default fallback image
              alt={instructor.name}
              width={32}
              height={32}
              className="object-cover rounded-full"
            />
            <span>{instructor.name}</span>
          </div>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
}
