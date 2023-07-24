"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface IFormState {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const [formState, setFormState] = useState<IFormState>({
    email: "",
    name: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev: IFormState) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://zouba-blog-6n7x6x4c0-zoubachraiet-yahoocom.vercel.app/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            password: formState.password,
          }),
        }
      );
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {}
  };

  return (
    <div className="text-center">
      <h2 className="font-bold my-4 text-2xl">Register as new user</h2>
      <form
        onSubmit={handleSubmit}
        className="flex items-center flex-col gap-4 md:w-fit w-full m-auto"
      >
        <input
          type="text"
          className="outline-none rounded-sm border-2 border-gray-400 p-2 w-full md:min-w-[400px]"
          placeholder="Name"
          onChange={handleChange}
          name="name"
        />
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
        <button
          type="submit"
          className="mt-4 bg-gradient-to-tr from-green-400  to-green-200 rounded-sm py-2 px-4 text-white w-fit"
        >
          Register
        </button>
      </form>
      <Link href="/dashboard/login">Already have an account?</Link>
    </div>
  );
};

export default Register;
