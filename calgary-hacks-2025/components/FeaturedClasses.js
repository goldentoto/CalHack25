import ClassCard from "./ClassCard";

export default function FeaturedClasses() {
  const classes = [
    {
<<<<<<< HEAD
      image: "calgary-hacks-2025/public/ItalianPastaMaking.jpg",
=======
      image: "",
>>>>>>> d60331bdd3c199f4f1a0a3d80ff28b10755ca707
      price: "75",
      rating: "4.9",
      reviews: "42",
      title: "Italian Pasta Making",
      description: "Learn authentic pasta making techniques from expert chefs",
      instructor: {
        name: "Chef Maria",
        image: "",
      },
      duration: "2h 30m",
    },
    {
<<<<<<< HEAD
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c14f4da1420b3da66fa6829d0f93f5bfbc46000af9741e7fa9b3f0adbc63a8aa?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823",
=======
      image: "",
>>>>>>> d60331bdd3c199f4f1a0a3d80ff28b10755ca707
      price: "89",
      rating: "4.8",
      reviews: "38",
      title: "Sushi Making Masterclass",
      description: "Master the art of sushi making with premium ingredients",
      instructor: {
        name: "Chef Tanaka",
        image: "",
      },
      duration: "3h",
    },
    {
<<<<<<< HEAD
      image: "https://i.pinimg.com/originals/4d/8a/6f/4d8a6f5b6916de0408b10daace682869.png",      
=======
      image: "",
>>>>>>> d60331bdd3c199f4f1a0a3d80ff28b10755ca707
      price: "95",
      rating: "4.9",
      reviews: "56",
      title: "French Pastry Art",
      description: "Create exquisite French pastries and desserts",
      instructor: {
        name: "Chef Pierre",
        image: "",
      },
      duration: "4h",
    },
  ];

  return (
    <div className="flex flex-col justify-center px-20 py-16 mt-5 w-full bg-gray-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col px-3.5 w-full max-md:max-w-full">
        <div className="self-start text-3xl font-bold leading-none text-black">
          Featured Classes
        </div>
        <div className="p-0.5 mt-11 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {classes.map((classItem, index) => (
              <div key={index} className="w-[33%] max-md:ml-0 max-md:w-full">
                <ClassCard {...classItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
