"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavbarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#131313] border-gray-700 md:hidden sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mb-5">
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
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-800 border-gray-700">
            <li>
              <a
                href="/partidos"
                className={`block py-2 px-3 rounded text-xl ${
                  pathname === "/partidos" ? "text-blue-500" : "text-white"
                } hover:text-blue-500`}
              >
                Partidos
              </a>
            </li>
            <li>
              <a
                href="/equipos"
                className={`block py-2 px-3 rounded text-xl ${
                  pathname === "/equipos" ? "text-blue-500" : "text-white"
                } hover:text-blue-500`}
              >
                Equipos
              </a>
            </li>
            <li>
              <a
                href="/jugadores"
                className={`block py-2 px-3 rounded text-xl ${
                  pathname === "/jugadores" ? "text-blue-500" : "text-white"
                } hover:text-blue-500`}
              >
                Jugadores
              </a>
            </li>
            <li>
              <a
                href="/foros"
                className={`block py-2 px-3 rounded text-xl ${
                  pathname === "/foros" ? "text-blue-500" : "text-white"
                } hover:text-blue-500`}
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
