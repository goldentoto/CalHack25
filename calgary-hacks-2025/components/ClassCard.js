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
      <div className="relative w-full aspect-[2.057]">
        <Image
          src={image}
          alt={title}
          layout="fill" // Ensures image fills the container
          objectFit="cover" // Keeps aspect ratio and fills the box
          className="rounded-t-xl"
        />
        <div className="absolute top-4 right-4 px-3.5 py-2 bg-white rounded-full text-sm font-medium text-black">
          ${price}
        </div>
      </div>
      <div className="flex flex-col p-6">
        <div className="flex gap-2.5 py-1">
          <div className="flex items-center">
            <Image src="/star.svg" alt="Rating star" width={18} height={18} />
            <span className="text-base leading-none text-black ml-1">{rating}</span>
          </div>
          <span className="text-base leading-none text-black">|</span>
          <span className="text-base leading-none text-black">{reviews} reviews</span>
        </div>
        <h3 className="mt-2.5 text-xl font-bold text-black">{title}</h3>
        <p className="mt-5 text-base text-black">{description}</p>
        <div className="flex justify-between items-center mt-7 text-sm">
          <div className="flex items-center gap-2 text-black">
            <Image
              src={instructor.image} // Correctly using instructor.image
              alt={instructor.name}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span>{instructor.name}</span>
          </div>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
}
