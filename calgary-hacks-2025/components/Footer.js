import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center px-20 py-12 w-full bg-gray-900 max-md:px-5 max-md:max-w-full">
      <div className="px-4 w-full max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start pt-0.5 pb-9 mx-auto w-full max-md:mt-8">
                <div className="text-xl font-bold leading-none text-white">
                  CookClass
                </div>
                <div className="mt-8 text-base leading-4 text-white">
                  Discover the joy of cooking with expert-led classes near you.
                </div>
                <div className="flex gap-4 self-stretch pr-14 mt-7 w-full max-md:pr-5">
                  {["facebook", "twitter", "instagram"].map((social, index) => (
                    <div
                      key={social}
                      className="flex overflow-hidden justify-center items-center min-h-4"
                    >
                      <Image 
                      src="file.svg"
                      alt="Rating star"
                      width={18}
                      height={18}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {[
              {
                title: "Explore",
                links: ["Classes", "Instructors", "Locations", "Gift Cards"],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Blog", "Press"],
              },
              {
                title: "Support",
                links: [
                  "Help Center",
                  "Contact Us",
                  "Privacy Policy",
                  "Terms of Service",
                ],
              },
            ].map((section, index) => (
              <div
                key={section.title}
                className="ml-5 w-3/12 max-md:ml-0 max-md:w-full"
              >
                <div className="flex flex-col grow py-px w-full text-base leading-none text-white max-md:mt-8">
                  <div className="self-start font-bold">{section.title}</div>
                  <div className="mt-6">
                    {section.links.map((link, linkIndex) => (
                      <div
                        key={link}
                        className={`pt-0.5 pb-2.5 ${linkIndex > 0 ? "mt-2" : ""} whitespace-nowrap max-md:pr-5`}
                      >
                        {link}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-16 pt-9 pb-2 mt-12 text-base leading-none text-center text-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
          © 2025 CookClass. All rights reserved.
        </div>
      </div>
    </div>
  );
}
