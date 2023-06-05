import Image from "next/image";
import HeroImage from "public/images/hero.png";

const Home = () => {
  return (
    <div className="flex h-full w-full items-center">
      <div className="flex flex-col-reverse md:flex-row justify-between w-full items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-green-200">
              Better design
            </span>{" "}
            <br /> for your digital <br /> products
          </h2>
          <p className="text-sm md:text-lg mt-8  font-medium">
            turning your idea into rality. We bring together <br /> the teams
            from the global tech industry
          </p>
          <button className="mt-4 bg-gradient-to-tr from-green-400  to-green-200 rounded-sm p-4 text-white">
            See our works
          </button>
        </div>
        <Image
          src={HeroImage}
          alt="hero image home"
          className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-cover animate-scaleImage"
        />
      </div>
    </div>
  );
};

export default Home;
