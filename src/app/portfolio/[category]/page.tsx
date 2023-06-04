import { NextPage } from "next/types";
import { items } from "./data";
import Image from "next/image";

const Category: React.FC<{ params: { [param: string]: string } }> = ({
  params,
}) => {
  const data = items[params.category];
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{params.category}</h2>
      <div className="[&>*:nth-child(2n)]:flex-row-reverse">
        {data.map(({ desc, id, image, title }) => {
          return (
            <div key={id} className="flex items-center gap-16 mb-8 ">
              <div>
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-justify mb-4"> {desc} </p>
                <button className="text-white bg-green-400 rounded-md p-3 hover:bg-green-600">
                  Sea more
                </button>
              </div>
              <Image
                src={image}
                alt={image}
                width={800}
                height={800}
                className="w-[400px] h-[400px] object-cover mb-4 rounded-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
