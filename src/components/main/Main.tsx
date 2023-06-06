"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { Inter } from "next/font/google";
import React, { useContext } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <body
      className={`${inter.className} flex flex-col ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <Navbar />
      <div className="flex-grow px-4 md:px-24 overflow-y-auto dark:bg-black">
        {children}
      </div>
      <Footer />
    </body>
  );
};

export default Main;
