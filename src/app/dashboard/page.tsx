"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import Image from "next/image";

import IllustrationImage from "public/images/illustration.png";
import { useState } from "react";

interface IPost {
  _id?: string;
  content: string;
  description: string;
  image: string;
  title: string;
  userName?: string;
}

const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const user = session.data?.user;

  console.log(session.status);

  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  const { data, mutate } = useSWR(
    `/api/posts?userName=${user?.name || ""}`,
    fetcher
  );

  if (session.status === "unauthenticated") {
    return <div>loading...</div>;
  }

  return <DashboardContent data={data || []} mutate={mutate} />;
};

interface IProps {
  data: IPost[];
  mutate: () => void;
}

const DashboardContent: React.FC<IProps> = ({ data, mutate }) => {
  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "Delete",
      });
      mutate();
    } catch (err: any) {
      throw new Error(err);
    }
  };

  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-4 ">
      <div>
        {Boolean(!data?.length) ? <div>No Posts yet</div> : null}
        {data.map((post) => (
          <div
            key={post?._id}
            className="flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div className="flex flex-col md:flex-row md:gap-4 md:items-center mt-4">
              <Image
                src={IllustrationImage}
                className="h-[150px] md:w-[150px] object-cover rounded-sm w-full"
                alt=""
              />
              <div className="flex flex-col justify-between">
                <h2 className="text-4xl font-bold">{post.title}</h2>
                <p className="text-justify">{post.description}</p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(post?._id as string)}
              className="bg-red-600 p-2 rounded-sm text-white cursor-pointer float-right"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <DashboardForm mutate={mutate} />
      </div>
    </div>
  );
};

const DashboardForm: React.FC<{ mutate: () => void }> = ({ mutate }) => {
  const [formState, setFormState] = useState<IPost>({
    content: "",
    description: "",
    image: "",
    title: "",
  });
  const session = useSession();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev: IPost) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/posts", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: formState.content,
          description: formState.description,
          image: formState.image,
          title: formState.title,
          userName: session.data?.user?.name,
        }),
      });
      setFormState({
        content: "",
        description: "",
        image: "",
        title: "",
      });
      mutate();
    } catch (err: any) {
      throw new Error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 md:w-fit w-full"
    >
      <h2 className="text-2xl font-bold">Add new post</h2>
      <input
        type="text"
        onChange={handleChange}
        className="outline-none rounded-sm border-2 border-gray-400 p-2 w-full md:min-w-[400px]"
        placeholder="Title"
        name="title"
        value={formState.title}
      />
      <input
        type="text"
        onChange={handleChange}
        className="outline-none rounded-sm border-2 border-gray-400 p-2 w-full md:min-w-[400px]"
        placeholder="Description"
        name="description"
        value={formState.description}
      />
      <input
        type="text"
        onChange={handleChange}
        className="outline-none rounded-sm border-2 border-gray-400 p-2 w-full md:min-w-[400px]"
        placeholder="Image"
        name="image"
        value={formState.image}
      />
      <textarea
        onChange={handleChange}
        className="outline-none rounded-sm border-2 border-gray-400 p-2 w-full md:min-w-[400px] min-h-[150px] max-h-[300px]"
        placeholder="Content"
        name="content"
        value={formState.content}
      />
      <button
        type="submit"
        className="mt-4 bg-gradient-to-tr from-green-400  to-green-200 rounded-sm py-2 px-4 text-white w-fit"
      >
        Post
      </button>
    </form>
  );
};

export default Dashboard;
