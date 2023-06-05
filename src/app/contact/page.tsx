/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import ContactImage from "public/images/contact.png";

const Contact = () => {
  return (
    <div className="">
      <div className="text-center my-8">
        <h2 className="md:text-6xl text-3xl font-bold">Let's keep in touch</h2>
      </div>
      <div className="flex md:flex-row flex-col justify-around items-center">
        <Image
          src={ContactImage}
          alt=""
          className="md:w-[350px] md:h-[350px] w-[150px] h-[150px] object-cover animate-scaleImage mb-4"
        />
        <form className="flex flex-col gap-4 md:w-fit w-full">
          <input
            type="text"
            className="outline-none rounded-sm border-2 border-gray-400 p-2 w-full md:min-w-[400px]"
            placeholder="Name"
          />
          <input
            type="text"
            className="outline-none rounded-sm border-2 border-gray-400 p-2 w-full md:min-w-[400px]"
            placeholder="Email"
          />
          <textarea
            className="outline-none rounded-sm border-2 border-gray-400 p-2 w-full md:min-w-[400px] min-h-[150px] max-h-[300px]"
            placeholder="Email"
          />
          <button className="mt-4 bg-gradient-to-tr from-green-400  to-green-200 rounded-sm py-2 px-4 text-white w-fit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
