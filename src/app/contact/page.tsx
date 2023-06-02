/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import ContactImage from "public/images/contact.png";

const Contact = () => {
  return (
    <div className="">
      <div className="text-center my-8">
        <h2 className="text-6xl font-bold">Let's keep in touch</h2>
      </div>
      <div className="flex justify-around items-center">
        <Image
          src={ContactImage}
          alt=""
          className="w-[350px] h-[350px] object-cover animate-scaleImage"
        />
        <form className="flex flex-col gap-4">
          <input
            type="text"
            className="outline-none rounded-sm border-2 border-gray-400 p-2 min-w-[400px]"
            placeholder="Name"
          />
          <input
            type="text"
            className="outline-none rounded-sm border-2 border-gray-400 p-2 min-w-[400px]"
            placeholder="Email"
          />
          <textarea
            className="outline-none rounded-sm border-2 border-gray-400 p-2 min-w-[400px] min-h-[150px] max-h-[300px]"
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
