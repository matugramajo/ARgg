"use client";

import React, { useState } from "react";
import Image from "next/image";

const NavbarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#131313] border-gray-700 md:hidden">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mb-5">
        <a
          href="#"
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
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-800 border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white  rounded bg-blue-600"
                aria-current="page"
              >
                Partidos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Equipos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded  text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Jugadores
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Foros
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;
