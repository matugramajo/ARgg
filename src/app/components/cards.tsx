import React from "react";
import Image from "next/image";

const Cards: React.FC = () => {
  return (
    <div>
      <div className="text-white hidden md:grid grid-cols-1 md:grid-cols-2 gap-10 md:flex-row mx-6 md:mx-24 mt-3 md:mt-7 text-lg">
        <div className="basis-1/2">Proximos partidos</div>
        <div className="basis-1/2">Equipos mas visitados</div>
      </div>
      <div className="text-white grid grid-cols-1 md:grid-cols-2 md:gap-10 md:flex-row justify-between mx-6 md:mx-24 mt-3 md:mt-7 text-lg">
        <div className="pb-3 flex md:hidden">Proximos partidos</div>
        <div className="basis-1/2 bg-[#232240] border border-[#9199E1] rounded-lg mb-5 md:mb-0">
          <div className="grid grid-cols-1 text-[#a1a1a1] divide-y divide-[#9199E1]">
            <div className="py-2">
              <div className="flex justify-between px-2 text-base ">
                <div>05/09/2024, 11:30hs</div>
                <div>Counter-Strike 2</div>
              </div>
              <div className="grid grid-cols-3 justify-between py-3">
                <div className="justify-self-end relative w-16 h-16">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="/Logo Shinden.png"
                    alt="Logo ARgg"
                  />
                </div>
                <div className="justify-self-center content-center">VS</div>
                <div className="justify-self-start relative w-16 h-16">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="/Logo Velox.png"
                    alt="Logo ARgg"
                  />
                </div>
              </div>
            </div>
            <div className="py-2">
              <div className="flex justify-between px-2 text-base ">
                <div>05/09/2024, 11:30hs</div>
                <div>Counter-Strike 2</div>
              </div>
              <div className="grid grid-cols-3 justify-between py-3">
                <div className="justify-self-end relative w-16 h-16">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="/Logo Shinden.png"
                    alt="Logo ARgg"
                  />
                </div>
                <div className="justify-self-center content-center">VS</div>
                <div className="justify-self-start relative w-16 h-16">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="/Logo Velox.png"
                    alt="Logo ARgg"
                  />
                </div>
              </div>
            </div>
            <div className="py-2">
              <div className="flex justify-between px-2 text-base ">
                <div>05/09/2024, 11:30hs</div>
                <div>Counter-Strike 2</div>
              </div>
              <div className="grid grid-cols-3 justify-between py-3">
                <div className="justify-self-end relative w-16 h-16">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="/Logo Shinden.png"
                    alt="Logo ARgg"
                  />
                </div>
                <div className="justify-self-center content-center">VS</div>
                <div className="justify-self-start relative w-16 h-16">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="/Logo Velox.png"
                    alt="Logo ARgg"
                  />
                </div>
              </div>
            </div>
            <div className="py-2">
              <div className="flex justify-between px-2 text-base ">
                <div>05/09/2024, 11:30hs</div>
                <div>Counter-Strike 2</div>
              </div>
              <div className="grid grid-cols-3 justify-between py-3">
                <div className="justify-self-end relative w-16 h-16">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="/Logo Shinden.png"
                    alt="Logo ARgg"
                  />
                </div>
                <div className="justify-self-center content-center">VS</div>
                <div className="justify-self-start relative w-16 h-16">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="/Logo Velox.png"
                    alt="Logo ARgg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-3 flex md:hidden">Equipos mas visitados</div>
        <div className="basis-1/2 bg-[#232240] border border-[#9199E1] rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 py-3">
            <div className="w-full max-w-sm border-b border-[#9199E1]">
              <div className="flex flex-col items-center py-4">
                <div className="w-24 h-24 mb-3 relative">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="/Logo Shinden.png"
                    alt="Logo ARgg"
                  />
                </div>
                <h5 className="text-xl font-medium text-white">Shinden</h5>
                <div className="flex flex-col mt-2">
                  <a
                    href="#"
                    className="mb-2 inline-flex items-center p-2 md:px-4 md:py-1 text-xs md:text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-500 hover:bg-blue-800 focus:ring-blue-900"
                  >
                    Proximos partidos
                  </a>
                  <a
                    href="#"
                    className="justify-center inline-flex items-center p-2 md:px-4 md:py-1 text-xs md:text-sm font-medium focus:outline-none rounded-lg borderfocus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-700 text-white border-gray-600 hover:text-white hover:bg-gray-800"
                  >
                    Redes
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm border-b border-l md:border-x border-[#9199E1]">
              <div className="flex flex-col items-center py-4">
                <div className="w-24 h-24 mb-3 relative">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="/Logo Shinden.png"
                    alt="Logo ARgg"
                  />
                </div>
                <h5 className="text-xl font-medium text-white">Shinden</h5>
                <div className="flex flex-col mt-2">
                  <a
                    href="#"
                    className="mb-2 inline-flex items-center p-2 md:px-4 md:py-1 text-xs md:text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-500 hover:bg-blue-800 focus:ring-blue-900"
                  >
                    Proximos partidos
                  </a>
                  <a
                    href="#"
                    className="justify-center inline-flex items-center p-2 md:px-4 md:py-1 text-xs md:text-sm font-medium focus:outline-none rounded-lg borderfocus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-700 text-white border-gray-600 hover:text-white hover:bg-gray-800"
                  >
                    Redes
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm border-b border-r md:border-r-0 border-[#9199E1]">
              <div className="flex flex-col items-center py-4">
                <div className="w-24 h-24 mb-3 relative">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="/Logo Shinden.png"
                    alt="Logo ARgg"
                  />
                </div>
                <h5 className="text-xl font-medium text-white">Shinden</h5>
                <div className="flex flex-col mt-2">
                  <a
                    href="#"
                    className="mb-2 inline-flex items-center p-2 md:px-4 md:py-1 text-xs md:text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-500 hover:bg-blue-800 focus:ring-blue-900"
                  >
                    Proximos partidos
                  </a>
                  <a
                    href="#"
                    className="justify-center inline-flex items-center p-2 md:px-4 md:py-1 text-xs md:text-sm font-medium focus:outline-none rounded-lg borderfocus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-700 text-white border-gray-600 hover:text-white hover:bg-gray-800"
                  >
                    Redes
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm border-b md:border-b-0 border-[#9199E1]">
              <div className="flex flex-col items-center py-4">
                <div className="w-24 h-24 mb-3 relative">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="/Logo Shinden.png"
                    alt="Logo ARgg"
                  />
                </div>
                <h5 className="text-xl font-medium text-white">Shinden</h5>
                <div className="flex flex-col mt-2">
                  <a
                    href="#"
                    className="mb-2 inline-flex items-center p-2 md:px-4 md:py-1 text-xs md:text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-500 hover:bg-blue-800 focus:ring-blue-900"
                  >
                    Proximos partidos
                  </a>
                  <a
                    href="#"
                    className="justify-center inline-flex items-center p-2 md:px-4 md:py-1 text-xs md:text-sm font-medium focus:outline-none rounded-lg borderfocus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-700 text-white border-gray-600 hover:text-white hover:bg-gray-800"
                  >
                    Redes
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm border-r md:border-x border-[#9199E1]">
              <div className="flex flex-col items-center py-4">
                <div className="w-24 h-24 mb-3 relative">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="/Logo Shinden.png"
                    alt="Logo ARgg"
                  />
                </div>
                <h5 className="text-xl font-medium text-white">Shinden</h5>
                <div className="flex flex-col mt-2">
                  <a
                    href="#"
                    className="mb-2 inline-flex items-center p-2 md:px-4 md:py-1 text-xs md:text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-500 hover:bg-blue-800 focus:ring-blue-900"
                  >
                    Proximos partidos
                  </a>
                  <a
                    href="#"
                    className="justify-center inline-flex items-center p-2 md:px-4 md:py-1 text-xs md:text-sm font-medium focus:outline-none rounded-lg borderfocus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-700 text-white border-gray-600 hover:text-white hover:bg-gray-800"
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
                <h5 className="text-xl font-medium text-white">Shinden</h5>
                <div className="flex flex-col mt-2">
                  <a
                    href="#"
                    className="mb-2 inline-flex items-center p-2 md:px-4 md:py-1 text-xs md:text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-500 hover:bg-blue-800 focus:ring-blue-900"
                  >
                    Proximos partidos
                  </a>
                  <a
                    href="#"
                    className="justify-center inline-flex items-center p-2 md:px-4 md:py-1 text-xs md:text-sm font-medium focus:outline-none rounded-lg borderfocus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-700 text-white border-gray-600 hover:text-white hover:bg-gray-800"
                  >
                    Redes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
