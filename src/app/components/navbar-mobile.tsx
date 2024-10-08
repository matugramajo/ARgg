"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MenuJuegos from "./menujuegos";

const NavbarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden sticky top-0 z-50 mb-5">
      <nav className="bg-[#131313] border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse relative h-16 w-32"
          >
            <Image
              src="/Logo-ARgg.png"
              layout="responsive"
              width={100}
              height={50}
              objectFit="contain"
              alt="Logo ARgg"
            />
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm rounded-lg text-white"
            aria-controls="navbar-hamburger"
            aria-expanded={isOpen}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isOpen ? "block" : "hidden"} w-full`}
            id="navbar-hamburger"
          >
            <ul className="flex flex-col mt-4 rounded-lg bg-[#1c1a34] border-gray-700 font-sans font-normal text-base divide-y divide-[#332f5e]">
              <li>
                <a
                  href="/"
                  className={`block py-2 px-3 rounded ${
                    pathname === "/" ? "text-blue-500" : "text-white"
                  } hover:text-blue-500`}
                >
                  Todo
                </a>
              </li>
              <li>
                <a
                  href="/partidos"
                  className={`block py-2 px-3 rounded ${
                    pathname === "/partidos" ? "text-blue-500" : "text-white"
                  } hover:text-blue-500`}
                >
                  Partidos
                </a>
              </li>
              <li>
                <a
                  href="/equipos"
                  className={`block py-2 px-3 rounded ${
                    pathname === "/equipos" ? "text-blue-500" : "text-white"
                  } hover:text-blue-500`}
                >
                  Equipos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <MenuJuegos />
    </div>
  );
};

export default NavbarMobile;
