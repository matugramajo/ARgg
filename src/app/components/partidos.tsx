import React from "react";
import Image from "next/image";

const Partidos: React.FC = () => {
  return (
    <div className="mt-5">
      <div className="">
        <div className="flex flex-col bg-[#232240] border border-[#9199E1] rounded-lg text-[#a1a1a1]">
          <div className="border-b border-b-[#9199E1] py-2">
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
          <div className="border-b border-b-[#9199E1] py-2">
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
          <div className="border-b border-b-[#9199E1] py-2">
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
    </div>
  );
};

export default Partidos;
