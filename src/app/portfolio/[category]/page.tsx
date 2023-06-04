import { NextPage } from "next/types";

const Category: NextPage<{ params: { [param: string]: string } }> = ({
  params,
}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{params.category}</h2>
    </div>
  );
};

export default Category;
