import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center px-20 py-12 w-full bg-gray-900 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col px-4 w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="bg-black bg-opacity-0 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start pt-0.5 pb-9 mx-auto w-full bg-black bg-opacity-0 max-md:mt-8">
                <div className="text-xl font-bold leading-none text-white">CookClass</div>
                <p className="mt-8 text-base leading-4 text-white">
                  Discover the joy of cooking with expert-led classes near you.
                </p>
                <div className="flex gap-4 self-stretch pr-14 mt-7 w-full bg-black bg-opacity-0 max-md:pr-5">
                  <a href="https://facebook.com" aria-label="Facebook">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/03f9d95b038c5e3a3e595e5820ab67cc717561011a2c3f2b6f3c34213721de5e?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823"
                      className="object-contain self-stretch my-auto w-4 aspect-square"
                      alt=""
                    />
                  </a>
                  <a href="https://twitter.com" aria-label="Twitter">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b56fe3df99083b04845057e7233ea71bb872606fe6c2e6900a2efa03a8c0f0a4?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823"
                      className="object-contain self-stretch my-auto w-3.5 aspect-[0.87]"
                      alt=""
                    />
                  </a>
                  <a href="https://instagram.com" aria-label="Instagram">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c774b17323bd78b9745adfbc89987a2747644fc1bffd0e734bae652673096890?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823"
                      className="object-contain self-stretch my-auto w-4 aspect-square"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-px w-full text-base leading-none text-white bg-black bg-opacity-0 max-md:mt-8">
                <h3 className="self-start font-bold">Explore</h3>
                <nav className="flex flex-col mt-6 bg-black bg-opacity-0">
                  <Link to="/classes" className="pt-0.5 pb-2.5 whitespace-nowrap bg-black bg-opacity-0 max-md:pr-5">
                    Classes
                  </Link>
                  <Link to="/instructors" className="pt-0.5 pb-2.5 mt-2 whitespace-nowrap bg-black bg-opacity-0 max-md:pr-5">
                    Instructors
                  </Link>
                  <Link to="/locations" className="pt-0.5 pb-2.5 mt-2 whitespace-nowrap bg-black bg-opacity-0 max-md:pr-5">
                    Locations
                  </Link>
                  <Link to="/gift-cards" className="pt-0.5 pb-2.5 mt-2 bg-black bg-opacity-0 max-md:pr-5">
                    Gift Cards
                  </Link>
                </nav>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-px w-full text-base leading-none text-white bg-black bg-opacity-0 max-md:mt-8">
                <h3 className="self-start font-bold">Company</h3>
                <nav className="flex flex-col mt-6 bg-black bg-opacity-0">
                  <Link to="/about" className="pt-0.5 pb-2.5 bg-black bg-opacity-0 max-md:pr-5">
                    About Us
                  </Link>
                  <Link to="/careers" className="pt-0.5 pb-2.5 mt-2 whitespace-nowrap bg-black bg-opacity-0 max-md:pr-5">
                    Careers
                  </Link>
                  <Link to="/blog" className="py-1.5 mt-2 whitespace-nowrap bg-black bg-opacity-0 max-md:pr-5">
                    Blog
                  </Link>
                  <Link to="/press" className="pt-0.5 pb-2.5 mt-2 whitespace-nowrap bg-black bg-opacity-0 max-md:pr-5">
                    Press
                  </Link>
                </nav>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-px w-full text-base leading-none text-white bg-black bg-opacity-0 max-md:mt-8">
                <h3 className="self-start font-bold">Support</h3>
                <nav className="flex flex-col mt-6 bg-black bg-opacity-0">
                  <Link to="/help" className="py-1.5 bg-black bg-opacity-0 max-md:pr-5">
                    Help Center
                  </Link>
                  <Link to="/contact" className="pt-0.5 pb-2.5 mt-2 bg-black bg-opacity-0 max-md:pr-5">
                    Contact Us
                  </Link>
                  <Link to="/privacy" className="py-1.5 mt-2 bg-black bg-opacity-0 max-md:pr-5">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="pt-0.5 pb-2.5 mt-2 bg-black bg-opacity-0 max-md:pr-5">
                    Terms of Service
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="px-16 pt-9 pb-2 mt-12 text-base leading-none text-center text-white bg-black bg-opacity-0 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          © 2025 CookClass. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;