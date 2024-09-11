import React from "react";
import Image from "next/image";
import { X, Github, Discord, Linkedin } from "./logos";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#131313]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <div className="relative h-14 w-28">
              <Image
                src="/Logo-ARgg-2.png"
                layout="responsive"
                width={100}
                height={50}
                objectFit="contain"
                alt="Flowbite Logo"
              />
            </div>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Partidos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Torneos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Equipos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Foros
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <div className="flex justify-between">
          <div>
            <span className="block text-sm text-gray-400">
              Diseñado y desarrollado por Matilde Gramajo.
            </span>
          </div>
          <div className="flex">
            <div className="px-2">
              <X />
            </div>
            <div className="px-2">
              <Github />
            </div>
            <div className="px-2">
              <Discord />
            </div>
            <div className="px-2">
              <Linkedin />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
