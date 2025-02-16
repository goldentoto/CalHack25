import Image from "next/image";

function Features() {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b014d7221bfb3362b8bee7c4ef53dce75ca7198705f787bb9c3e03243d07ff9b?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823",
      title: "Expert Instructors",
      description: "Learn from professional chefs with years of experience",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dfab8b3408bcc0240f6f2fd20370582ea43564ed40a6740eb60e2f3b37ed0733?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823",
      title: "Flexible Schedule",
      description: "Book classes that fit your schedule",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/278a6b0575a18dc99fa044e711ce9ad993cc78cabe985bc776b5c36669ca540c?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823",
      title: "Earn Certificates",
      description: "Get certified for completed courses",
    },
  ];

  return (
    <div className="flex flex-col justify-center px-20 py-16 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="px-4 w-full max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {features.map((feature, index) => (
              <div key={index} className="w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-9 pb-3 w-full text-center text-black max-md:px-5 max-md:mt-8">
                  <Image
                    src="file.svg"
                    alt={feature.title}
                    width={64}
                    height={64}
                    className="object-contain rounded-full"
                  />
                  <div className="mt-5 text-xl font-bold leading-none">
                    {feature.title}
                  </div>
                  <div className="self-stretch mt-5 text-base leading-4">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} export default Features;