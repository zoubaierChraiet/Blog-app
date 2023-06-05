import Image from "next/image";
import StudyImage from "public/images/study.avif";

const About = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute bottom-0 left-0 mb-2 ml-2 p-2 md:ml-4 md:mb-4 md:p-4 bg-gradient-to-r from-green-300 to-green-100 opacity-80">
          <h2 className="text-white font-bold text-lg">
            Digital story tellers
          </h2>
          <span className="text-white font-bold">
            Handcrafting award winnig digital experiences
          </span>
        </div>
        <Image
          src={StudyImage}
          alt="StudyImage about"
          className="object-cover h-[300px] w-full"
        />
      </div>
      <div className="grid grid-cols-2 gap-8 mt-4">
        <div>
          <h1 className="md:text-lg text-base font-bold">Who Are We?</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div>
          <h1 className="md:text-lg text-base font-bold">What We Do?</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
