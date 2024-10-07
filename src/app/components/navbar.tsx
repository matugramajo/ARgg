"use client";

import React from "react";
import Image from "next/image";
import { Arg } from "./logos";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[#131313] border-gray-700 hidden md:block sticky top-0 z-50">
      <div className="flex flex-wrap items-center justify-between mx-10 py-2">
        <a
          href="/"
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <div className="relative h-20 w-40">
            <Image
              src="/Logo-ARgg.png"
              layout="responsive"
              width={100}
              height={50}
              objectFit="contain"
              alt="Logo ARgg"
            />
          </div>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex font-medium p-4 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 border-gray-700">
            <li>
              <Link
                href="/partidos"
                className={`block py-2 px-3 rounded text-xl ${
                  pathname === "/partidos" ? "text-blue-500" : "text-white"
                } hover:text-blue-500`}
              >
                Partidos
              </Link>
            </li>
            <li>
              <Link
                href="/equipos"
                className={`block py-2 px-3 rounded text-xl ${
                  pathname === "/equipos" ? "text-blue-500" : "text-white"
                } hover:text-blue-500`}
              >
                Equipos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
