import React from "react";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import Countdown from "./countdown";

const Eventos: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 md:mx-24 md:my-3 mt-3">
      <div className="flex flex-col bg-[#1a1931] border border-[#9199E1] rounded-md">
        <div>
          <Image
            src="/AGS.png"
            alt="Logo AGS"
            width={400}
            height={200}
            className="w-full h-48 object-cover rounded-t-md"
          />
        </div>
        <div className="flex flex-col px-4 py-3">
          <div className="text-2xl text-white font-semibold">
            Argentina Game Show
          </div>
          <div className="text-[#adb3d1] text-base text-start py-2">
            AGS Visa es la celebración del mundo de los videojuegos más
            importante del país, uniendo los mundos del gaming, esports, música
            y streaming.
          </div>
          <div className="flex flex-row justify-self-center content-center text-base text-gray-400">
            <Calendar className="w-4 h-4 mr-1 self-center" />
            Oct 11, 2024
          </div>
          <div className="flex flex-row justify-self-center content-center text-base text-gray-400 py-1">
            <MapPin className="w-4 h-4 mr-1 self-center" />
            Buenos Aires
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#1a1931] border border-[#9199E1] rounded-md">
        <div>
          <Image
            src="/CALZ.png"
            alt="Logo AGS"
            width={400}
            height={200}
            className="w-full h-48 object-cover rounded-t-md"
          />
        </div>
        <div className="flex flex-col px-4 py-3">
          <div className="text-2xl text-white font-semibold">Retro Start</div>
          <div className="text-[#adb3d1] text-base text-start py-2">
            La mayor experiencia dedicada al Retro Gaming! toda la magia y
            sentir de las generaciones pasadas, juntas en un solo lugar.
          </div>
          <div className="flex flex-row justify-self-center content-center text-base text-gray-400">
            <Calendar className="w-4 h-4 mr-1 self-center" />
            Nov 09, 2024
          </div>
          <div className="flex flex-row justify-self-center content-center text-base text-gray-400 py-1">
            <MapPin className="w-4 h-4 mr-1 self-center" />
            Buenos Aires
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#1a1931] border border-[#9199E1] rounded-md">
        <div>
          <Image
            src="/PGL.jpg"
            alt="Logo AGS"
            width={400}
            height={200}
            className="w-full h-48 object-cover rounded-t-md"
          />
        </div>
        <div className="flex flex-col px-4 py-3">
          <div className="text-2xl text-white font-semibold">PGL on FIRe</div>
          <div className="text-[#adb3d1] text-base text-start py-2">
            El circuito 2025 de PGL comenzará con el PGL on FiRe Buenos Aires, a
            jugarse en la capital argentina en febrero de 2025 dentro del
            icónico Teatro Gran Rex de la ciudad.
          </div>
          <div className="flex flex-row justify-self-center content-center text-base text-gray-400">
            <Calendar className="w-4 h-4 mr-1 self-center" />
            Feb 10, 2025
          </div>
          <div className="flex flex-row justify-self-center content-center text-base text-gray-400 py-1">
            <MapPin className="w-4 h-4 mr-1 self-center" />
            Buenos Aires
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventos;
