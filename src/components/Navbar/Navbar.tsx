"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext } from "react";

const links = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Logout", to: "/logout" },
];

const Navbar = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className="h-[100px] px-24 dark:bg-black">
      <div className="flex justify-between items-center h-full">
        <h2 className="dark:text-white">ZOU-BLOG</h2>
        <ul className="hidden md:block">
          <li className={`float-left px-1`}>
            <button
              className={`rounded-md p-2 ${
                theme === "light"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => toggle()}
            >{`${theme === "light" ? "dark" : "light"} mode`}</button>
          </li>
          {links.map((link) => {
            return (
              <li
                key={link.label}
                className="float-left px-1 hover:font-bold transition-all duration-100 dark:text-white"
              >
                <Link href={link.to}> {link.label} </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
