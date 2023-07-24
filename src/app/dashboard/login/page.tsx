"use client";

import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface IFormState {
  email: string;
  password: string;
}

const Login = () => {
  const [formState, setFormState] = useState<IFormState>({
    email: "",
    password: "",
  });
  const router = useRouter();
  const session = useSession();

  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev: IFormState) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      signIn("credentials", {
        email: formState.email,
        password: formState.password,
      });
    } catch (err: any) {
      throw new Error(err);
    }
  };
  return (
    <div>
      <div className="text-center">
        <h2 className="font-bold my-4 text-2xl">Sign in</h2>
        <form
          onSubmit={handleSubmit}
          className="flex items-center flex-col gap-4 md:w-fit w-full m-auto"
        >
          <input
            type="text"
            className="outline-none rounded-sm border-2 border-gray-400 p-2 w-full md:min-w-[400px]"
            placeholder="Email"
            onChange={handleChange}
            name="email"
          />
          <input
            className="outline-none rounded-sm border-2 border-gray-400 p-2 w-full md:min-w-[400px]"
            placeholder="password"
            type="password"
            onChange={handleChange}
            name="password"
          />
          <div className="flex gap-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-4 bg-gradient-to-tr from-green-400  to-green-200 rounded-sm py-2 px-4 text-white w-fit"
            >
              Sign in
            </button>
            <button
              className="bg-gradient-to-tr from-green-400  to-green-200 text-white mt-4 p-2 rounded-sm"
              onClick={() => signIn("google")}
            >
              signin with google
            </button>
          </div>
        </form>
        <Link href="/dashboard/register">You don`t have an account?</Link>
      </div>
    </div>
  );
};

export default Login;
