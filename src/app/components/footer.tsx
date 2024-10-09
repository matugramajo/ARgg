import React from "react";
import Image from "next/image";
import { X, Github, Linkedin } from "./logos";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#131313cc] text-gray-400 md:py-8 py-5 md:mt-20 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className=" flex md:flex-col flex-row items-center md:items-start mb-4 md:mb-0">
            <div className="h-8 w-24 md:h-14 md:w-28">
              <Image
                src="/Logo-ARgg-2.png"
                layout="responsive"
                width={100}
                height={50}
                objectFit="contain"
                alt="ARgg Logo"
              />
            </div>
            <div className="hidden md:flex text-sm pl-3 md:pl-0">
              Diseñado y desarrollado por Matilde Gramajo.
            </div>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://x.com/_____matilde"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6"
            >
              <X />
            </a>
            <a
              href="https://github.com/matugramajo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/matildegramajo/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6"
            >
              <Linkedin />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xs mb-3">
              Si te resultó util y te gustó mi trabajo
            </p>
            <a
              href="https://cafecito.app/matugramajo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-[#423f76cc] p-2 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:text-white"
            >
              Invitame un cafecito (:
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
