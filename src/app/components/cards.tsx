import React from "react";
import Partidos from "./partidos";
import Image from "next/image";

const Cards: React.FC = () => {
  return (
    <div className="text-white grid grid-cols-2 gap-10 md:flex-row justify-between mx-6 md:mx-24 mt-3 md:mt-7 text-lg">
      <div className="basis-1/2">
        <a className="pb-3">Proximos partidos</a>
        <Partidos />
      </div>
      <div className="basis-1/2 mt-8 md:mt-0">
        <a className="pb-3">Equipos mas visitados</a>
        <div className="grid grid-cols-2 gap-2s md:grid-cols-3 md:gap-10 mt-5 border rounded-lg bg-[#232240] border-[#9199E1] py-4">
          <div className="w-full max-w-sm">
            <div className="flex flex-col items-center py-4">
              <div className="w-24 h-24 mb-3 relative">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src="/Logo Shinden.png"
                  alt="Logo ARgg"
                />
              </div>
              <h5 className="mb-1 text-xl font-medium text-white">Shinden</h5>
              <div className="flex flex-col md:flex-row mt-2 md:mt-4">
                <a
                  href="#"
                  className="mb-2 md:mb-0 inline-flex items-center p-2 md:px-4 md:py-2 md:mr-3 text-xs md:text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-500 hover:bg-blue-800 focus:ring-blue-900"
                >
                  Proximos partidos
                </a>
                <a
                  href="#"
                  className="justify-center inline-flex items-center p-2 md:px-4 md:py-2 text-xs md:text-sm font-medium focus:outline-none rounded-lg borderfocus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-700 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-800"
                >
                  Redes
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm">
            <div className="flex flex-col items-center py-4">
              <div className="w-24 h-24 mb-3 relative">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src="/Logo Shinden.png"
                  alt="Logo ARgg"
                />
              </div>
              <h5 className="mb-1 text-xl font-medium text-white">Shinden</h5>
              <div className="flex flex-col md:flex-row mt-2 md:mt-4">
                <a
                  href="#"
                  className="mb-2 md:mb-0 inline-flex items-center p-2 md:px-4 md:py-2 md:mr-3 text-xs md:text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-500 hover:bg-blue-800 focus:ring-blue-900"
                >
                  Proximos partidos
                </a>
                <a
                  href="#"
                  className="justify-center inline-flex items-center p-2 md:px-4 md:py-2 text-xs md:text-sm font-medium focus:outline-none rounded-lg borderfocus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-700 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-800"
                >
                  Redes
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm">
            <div className="flex flex-col items-center py-4">
              <div className="w-24 h-24 mb-3 relative">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src="/Logo Shinden.png"
                  alt="Logo ARgg"
                />
              </div>
              <h5 className="mb-1 text-xl font-medium text-white">Shinden</h5>
              <div className="flex flex-col md:flex-row mt-2 md:mt-4">
                <a
                  href="#"
                  className="mb-2 md:mb-0 inline-flex items-center p-2 md:px-4 md:py-2 md:mr-3 text-xs md:text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-500 hover:bg-blue-800 focus:ring-blue-900"
                >
                  Proximos partidos
                </a>
                <a
                  href="#"
                  className="justify-center inline-flex items-center p-2 md:px-4 md:py-2 text-xs md:text-sm font-medium focus:outline-none rounded-lg borderfocus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-700 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-800"
                >
                  Redes
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm">
            <div className="flex flex-col items-center py-4">
              <div className="w-24 h-24 mb-3 relative">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src="/Logo Shinden.png"
                  alt="Logo ARgg"
                />
              </div>
              <h5 className="mb-1 text-xl font-medium text-white">Shinden</h5>
              <div className="flex flex-col md:flex-row mt-2 md:mt-4">
                <a
                  href="#"
                  className="mb-2 md:mb-0 inline-flex items-center p-2 md:px-4 md:py-2 md:mr-3 text-xs md:text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-500 hover:bg-blue-800 focus:ring-blue-900"
                >
                  Proximos partidos
                </a>
                <a
                  href="#"
                  className="justify-center inline-flex items-center p-2 md:px-4 md:py-2 text-xs md:text-sm font-medium focus:outline-none rounded-lg borderfocus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-700 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-800"
                >
                  Redes
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm">
            <div className="flex flex-col items-center py-4">
              <div className="w-24 h-24 mb-3 relative">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src="/Logo Shinden.png"
                  alt="Logo ARgg"
                />
              </div>
              <h5 className="mb-1 text-xl font-medium text-white">Shinden</h5>
              <div className="flex flex-col md:flex-row mt-2 md:mt-4">
                <a
                  href="#"
                  className="mb-2 md:mb-0 inline-flex items-center p-2 md:px-4 md:py-2 md:mr-3 text-xs md:text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-500 hover:bg-blue-800 focus:ring-blue-900"
                >
                  Proximos partidos
                </a>
                <a
                  href="#"
                  className="justify-center inline-flex items-center p-2 md:px-4 md:py-2 text-xs md:text-sm font-medium focus:outline-none rounded-lg borderfocus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-700 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-800"
                >
                  Redes
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm">
            <div className="flex flex-col items-center py-4">
              <div className="w-24 h-24 mb-3 relative">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src="/Logo Shinden.png"
                  alt="Logo ARgg"
                />
              </div>
              <h5 className="mb-1 text-xl font-medium text-white">Shinden</h5>
              <div className="flex flex-col md:flex-row mt-2 md:mt-4">
                <a
                  href="#"
                  className="mb-2 md:mb-0 inline-flex items-center p-2 md:px-4 md:py-2 md:mr-3 text-xs md:text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-500 hover:bg-blue-800 focus:ring-blue-900"
                >
                  Proximos partidos
                </a>
                <a
                  href="#"
                  className="justify-center inline-flex items-center p-2 md:px-4 md:py-2 text-xs md:text-sm font-medium focus:outline-none rounded-lg borderfocus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-700 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-800"
                >
                  Redes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
