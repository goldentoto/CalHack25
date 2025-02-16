import ClassCard from "./ClassCard";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedClasses() {
  const classes = [
    {
      image: "/ItalianPastaMaking.jpg",
      price: "75",
      rating: "4.9",
      reviews: "42",
      title: "Italian Pasta Making",
      description: "Learn authentic pasta making techniques from expert chefs",
      instructor: {
        name: "Chef Maria",
        image: "/maria.jpg",
      },
      duration: "2h 30m",
    },
    {
      image: "/sushu.jpg",
      price: "89",
      rating: "4.8",
      reviews: "38",
      title: "Sushi Making Masterclass",
      description: "Master the art of sushi making with premium ingredients",
      instructor: {
        name: "Chef Tanaka",
        image: "/tanaka.jpg",
      },
      duration: "3h",
    },
    {
      image: "/frenchart.avif",
      price: "95",
      rating: "4.9",
      reviews: "56",
      title: "French Pastry Art",
      description: "Create exquisite French pastries and desserts",
      instructor: {
        name: "Chef Pierre",
        image: "/chefjeanP.jpg",
      },
      duration: "4h",
    },
  ];


  return (
    <div className="flex flex-col justify-center px-20 py-16 mt-5 w-full bg-gray-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col lg:px-16 w-full max-md:max-w-full">
        <div className="self-start text-3xl font-bold leading-none text-black">
          Featured Classes
        </div>
        <div className="p-0.5 mt-11 max-md:mt-10 max-md:max-w-full">
          <Link href='/classpage' className='w-block full'>
            <div className="flex gap-5 max-md:flex-col">
              {classes.map((classItem, index) => (
                <div key={index} className="w-1/4 flex flex-1 max-md:w-full">
                  <ClassCard {...classItem} className="h-full" />
                </div>
              ))}
            </div>
          </Link>
        </div>
      </div>
    </div>

  );
}
