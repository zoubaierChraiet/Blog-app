import Image from "next/image";
import Link from "next/link";

import AppsImage from "public/images/apps.jpg";
import IllustrationImage from "public/images/illustration.png";
import WebsitesImage from "public/images/websites.jpg";

const Portfolio = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Choose a gallerie</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative w-full md:w-fit border-4 rounded-sm border-gray-400 cursor-pointer">
          <Image
            src={IllustrationImage}
            alt="AppsImage"
            className="w-full md:w-[200px] h-[300px] object-cover"
          />
          <Link href="/portfolio/illustrations">
            <span className="absolute bottom-0 font-extrabold text-green-400 text-xl right-0 pr-2 pb-2">
              Illustrations
            </span>
          </Link>
        </div>
        <div className="relative w-full md:w-fit border-4 rounded-sm border-gray-400 cursor-pointer">
          <Image
            src={WebsitesImage}
            alt="AppsImage"
            className="w-full md:w-[200px] h-[300px] object-cover"
          />
          <Link href="/portfolio/websites">
            <span className="absolute bottom-0 font-extrabold text-green-400 text-xl right-0 pr-2 pb-2">
              Websites
            </span>
          </Link>
        </div>
        <div className="relative w-full md:w-fit border-4 rounded-sm border-gray-400 cursor-pointer">
          <Image
            src={AppsImage}
            alt="AppsImage"
            className="w-full md:w-[200px] h-[300px] object-cover"
          />
          <Link href="/portfolio/applications">
            <span className="absolute bottom-0 font-extrabold text-green-400 text-xl right-0 pr-2 pb-2">
              Applications
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
