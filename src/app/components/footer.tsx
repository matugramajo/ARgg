import React from "react";
import Image from "next/image";
import { X, Github, Discord, Linkedin } from "./logos";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#131313]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 md:mt-14 mt-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex md:mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <div className="relative h-14 w-28">
              <Image
                src="/Logo-ARgg-2.png"
                layout="responsive"
                width={100}
                height={50}
                objectFit="contain"
                alt="ARgg Logo"
              />
            </div>
          </a>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <span className="block text-sm text-gray-400">
              Diseñado y desarrollado por Matilde Gramajo.
            </span>
          </div>
          <div className="flex pt-4 md:pt-0">
            <div className="px-2">
              <a
                href="https://x.com/_____matilde"
                target="_blank"
                rel="noopener noreferrer"
              >
                <X />
              </a>
            </div>
            <div className="px-2">
              <a
                href="https://github.com/matugramajo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
            </div>
            <div className="px-2">
              <a
                href="https://www.linkedin.com/in/matildegramajo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
