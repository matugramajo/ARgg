import React from "react";
import Image from "next/image";
import { Arg } from "./logos";
import Link from "next/link";

const Partidos: React.FC = () => {
  return (
    <div className="mt-5">
      <div className="pb-3 mx-6 md:mx-24">
        <a>Proximos partidos</a>
      </div>
      <div className="flex flex-col mx-6 md:mx-24 bg-[#232240] rounded-lg text-[#a1a1a1]">
        <div className="border-b border-b-[#9199E1]  grid grid-cols-3 justify-between py-2 px-5">
          <div className="content-center px-2 text-base ">
            05/09/2024, 11:30hs
          </div>
          <div className="grid grid-cols-3 justify-between py-4">
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
          <div className="justify-self-end content-center">
            <div>Counter-Strike 2</div>
            <div>ESL Pro League S20</div>
          </div>
        </div>
        <div className="border-b border-b-[#9199E1]  grid grid-cols-3 justify-between py-2 px-5">
          <div className="content-center px-2 text-base ">
            05/09/2024, 11:30hs
          </div>
          <div className="grid grid-cols-3 justify-between py-4">
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
          <div className="justify-self-end content-center">
            <div>Counter-Strike 2</div>
            <div>ESL Pro League S20</div>
          </div>
        </div>
        <div className="border-b border-b-[#9199E1]  grid grid-cols-3 justify-between py-2 px-5">
          <div className="content-center px-2 text-base ">
            05/09/2024, 11:30hs
          </div>
          <div className="grid grid-cols-3 justify-between py-4">
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
          <div className="justify-self-end content-center">
            <div>Counter-Strike 2</div>
            <div>ESL Pro League S20</div>
          </div>
        </div>
        <div className="grid grid-cols-3 justify-between py-2 px-5">
          <div className="content-center px-2 text-base ">
            05/09/2024, 11:30hs
          </div>
          <div className="grid grid-cols-3 justify-between py-4">
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
          <div className="justify-self-end content-center">
            <div>Counter-Strike 2</div>
            <div>ESL Pro League S20</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partidos;
