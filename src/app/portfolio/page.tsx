import Image from "next/image";

import AppsImage from "public/images/apps.jpg";
import IllustrationImage from "public/images/illustration.png";
import WebsitesImage from "public/images/websites.jpg";

const Portfolio = () => {
  return (
    <div>
      <h2 className="text-7xl font-bold mb-4">Our works</h2>
      <h2 className="text-3xl font-bold mb-4">Choose a gallerie</h2>
      <div className="flex gap-4">
        <div className="relative w-fit border-4 rounded-sm border-gray-400 cursor-pointer">
          <Image
            src={IllustrationImage}
            alt="AppsImage"
            className="w-[200px] h-[300px] object-cover"
          />
          <span className="absolute bottom-0 font-extrabold text-green-400 text-xl right-0 pr-2 pb-2">
            Illustrations
          </span>
        </div>
        <div className="relative w-fit border-4 rounded-sm border-gray-400 cursor-pointer">
          <Image
            src={WebsitesImage}
            alt="AppsImage"
            className="w-[200px] h-[300px] object-cover"
          />
          <span className="absolute bottom-0 font-extrabold text-green-400 text-xl right-0 pr-2 pb-2">
            Websites
          </span>
        </div>
        <div className="relative w-fit border-4 rounded-sm border-gray-400 cursor-pointer">
          <Image
            src={AppsImage}
            alt="AppsImage"
            className="w-[200px] h-[300px] object-cover"
          />
          <span className="absolute bottom-0 font-extrabold text-green-400 text-xl right-0 pr-2 pb-2">
            Applications
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
