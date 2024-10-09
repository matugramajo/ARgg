import React from "react";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import Countdown from "./countdown";

const Partido: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#1a1931] border border-[#9199E1] rounded-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl pb-3">
      <div className="bg-gradient-to-r from-[#252346] to-[#5451a2] text-lg text-[#c5c5c5] py-2 pl-2">
        Counter-Strike 2
      </div>
      <div className="grid grid-cols-3 justify-between py-2">
        <div className="grid grid-cols-1 justify-self-end relative">
          <div className="relative w-16 h-16">
            <Image
              objectFit="contain"
              layout="fill"
              src="/Logo Shinden.png"
              alt="Logo ARgg"
            />
          </div>
          <div className="pr-2 pt-1 text-white">Shinden</div>
        </div>
        <div className="justify-self-center content-center text-2xl text-white">
          VS
        </div>
        <div className="grid grid-cols-1 justify-self-start relative">
          <div className="relative w-16 h-16">
            <Image
              objectFit="contain"
              layout="fill"
              src="/Logo Velox.png"
              alt="Logo ARgg"
            />
          </div>
          <div className="pl-5 pt-2 text-white">Velox</div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-between ">
        <div className="flex flex-row justify-self-center content-center text-sm text-gray-400">
          <Calendar className="w-4 h-4 mr-1 self-center" />
          Oct 22, 2024
        </div>
        <div className="flex flex-row justify-self-center content-center text-sm text-gray-400">
          <Clock className="w-4 h-4 mr-1 self-center" />
          08:00 PM
        </div>
      </div>
      <div className="flex justify-center pt-2 text-white">
        <Countdown targetDate="2024-10-22T00:00:00" />
      </div>
    </div>
  );
};

export default Partido;
