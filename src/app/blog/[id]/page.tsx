import Image from "next/image";

import IllustrationImage from "public/images/illustration.png";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("server error");
  }

  return res.json();
};

export async function generateMetadata({
  params,
}: {
  params: { [param: string]: string };
}) {
  const res = await getData(params.id);

  return {
    title: res.title,
    description: res.description,
  };
}

const BlogPost = async ({
  params,
}: {
  params: { [param: string]: string };
}) => {
  const data = await getData(params.id);
  return (
    <div>
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl md:text-4xl font-bold">{data.title}</h2>
          <p className="text-justify">{data.description}</p>
          <div>avatar</div>
        </div>
        <Image
          src={IllustrationImage}
          className="h-[250px] object-cover rounded-sm w-full"
          alt=""
        />
      </div>
      <div className="mt-8">
        <p className="text-justify">{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
