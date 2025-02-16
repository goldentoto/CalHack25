import Link from "next/link";
import ClassCard from "./ClassCard";

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
        image: "https://www.bing.com/images/search?view=detailV2&ccid=w0B38r2R&id=769ABB0D704A30D28340DD16BEF5B96F5C4F149E&thid=OIP.w0B38r2ReM7PGP7R3crhvwHaIE&mediaurl=https%3a%2f%2fspecials-images.forbesimg.com%2fimageserve%2f5ee28b23c8e06b00069a072b%2f960x0.jpg%3ffit%3dscale&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c34077f2bd9178cecf18fed1ddcae1bf%3frik%3dnhRPXG%252b59b4W3Q%26pid%3dImgRaw%26r%3d0&exph=1045&expw=959&q=Chef+Maria&simid=608025133683116275&FORM=IRPRST&ck=343A1ED78FFE74475F5EE84667E95035&selectedIndex=0&itb=0",
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
        image: "https://www.bing.com/images/search?view=detailV2&ccid=50AJ6Uv3&id=C5DBB8064B1F9341CC13EEE1FC530066347CA4F1&thid=OIP.50AJ6Uv3TMgZa7HdFQ4jywHaE7&mediaurl=https%3a%2f%2fwww.viedeluxe.fr%2fwp-content%2fuploads%2f2023%2f01%2fLe_Bristol_Paris_-_Chef_Patissier_Yu_Tanaka_-_CFranck_Juery_-_2_0934.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.e74009e94bf74cc8196bb1dd150e23cb%3frik%3d8aR8NGYAU%252fzh7g%26pid%3dImgRaw%26r%3d0&exph=787&expw=1181&q=Chef+tanaka&simid=607997426862982390&FORM=IRPRST&ck=04A7E4038AE0CE35C2B2EAE6547A63F5&selectedIndex=7&itb=0",
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
      <div className="flex flex-col px-3.5 w-full max-md:max-w-full">
        <div className="self-start text-3xl font-bold leading-none text-black">
          Featured Classes
        </div>
        <div className="p-0.5 mt-11 max-md:mt-10 max-md:max-w-full">
          <Link href="/classpage" className="w-block full">
            <div className="flex gap-5 max-md:flex-col">
              {classes.map((classItem, index) => (
                <div key={index} className="w-[33%] max-md:ml-0 max-md:w-full">
                  <ClassCard {...classItem} />
                </div>
              ))}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
