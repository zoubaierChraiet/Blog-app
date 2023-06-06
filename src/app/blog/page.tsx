import Image from "next/image";
import Link from "next/link";
import AppsImage from "public/images/apps.jpg";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("server error");
  }

  return res.json();
};

const Blog = async () => {
  const data = await getData();

  return (
    <div>
      {data.map((item: any) => {
        return (
          <Link href={`/blog/${item._id}`} key={item._id}>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center mb-4">
              <Image
                src={AppsImage}
                className="md:w-[300px] md:h-[200px] object-cover rounded-sm w-full"
                alt=""
              />
              <div>
                <h2 className="text-4xl font-bold">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
