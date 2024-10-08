import Image from "next/image";

const Equipo: React.FC = () => {
  return (
    <div className="w-full max-w-sm border rounded-md shadow bg-[#1a1931] border-[#9199E1]">
      <div className="flex flex-col items-center py-4">
        <div className="w-24 h-24 mb-2 relative">
          <Image
            objectFit="contain"
            layout="fill"
            src="/Logo Shinden.png"
            alt="Logo ARgg"
          />
        </div>
        <h5 className="mb-1 text-xl font-medium text-white">Shinden</h5>
        <div className="flex mt-2">
          <a
            href="#"
            className="mb-2 md:mb-0 p-2 md:px-4 md:py-2 md:mr-3 text-xs md:text-sm font-medium text-center text-white rounded-lg bg-[#5451a2] hover:bg-blue-800 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Proximos partidos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Equipo;
