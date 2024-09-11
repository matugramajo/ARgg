import Image from "next/image";
import Navbar from "./components/navbar";
import MenuJuegos from "./components/menujuegos";

export default function Home() {
  return (
    <>
      <Navbar />
      <MenuJuegos />
      <div className="text-3xl font-semibold ml-24">
        <a>Todos los juegos</a>
      </div>
      <div className="flex flex-row justify-between mx-24 mt-7 text-lg">
        <div className="basis-2/5 pr-24">
          <div className="pb-3">
            <a>Proximos partidos</a>
          </div>
          <div className="flex flex-col bg-[#232240] rounded-lg">
            <div className="border-b border-b-[#9199E1] py-2">
              <div className="flex justify-between px-2 text-base text-[#a1a1a1]">
                <div>05/09/2024, 11:30hs</div>
                <div>Counter-Strike 2</div>
              </div>
              <div className="grid grid-cols-3 justify-between py-4">
                <div className="justify-self-end">
                  <img
                    src="/Logo Shinden.png"
                    className="h-16"
                    alt="Logo ARgg"
                  />
                </div>
                <div className="justify-self-center content-center">VS</div>
                <div className="justify-self-start">
                  <img src="/Logo Velox.png" className="h-16" alt="Logo ARgg" />
                </div>
              </div>
              <div className="px-2 text-base text-[#a1a1a1]">BO3</div>
            </div>
            <div className="border-b border-b-[#9199E1] py-2">
              <div className="flex justify-between px-2 text-base text-[#a1a1a1]">
                <div>05/09/2024, 11:30hs</div>
                <div>Counter-Strike 2</div>
              </div>
              <div className="grid grid-cols-3 justify-between py-4">
                <div className="justify-self-end">
                  <img
                    src="/Logo Shinden.png"
                    className="h-16"
                    alt="Logo ARgg"
                  />
                </div>
                <div className="justify-self-center content-center">VS</div>
                <div className="justify-self-start">
                  <img src="/Logo Velox.png" className="h-16" alt="Logo ARgg" />
                </div>
              </div>
              <div className="px-2 text-base text-[#a1a1a1]">BO3</div>
            </div>
            <div className="border-b border-b-[#9199E1] py-2">
              <div className="flex justify-between px-2 text-base text-[#a1a1a1]">
                <div>05/09/2024, 11:30hs</div>
                <div>Counter-Strike 2</div>
              </div>
              <div className="grid grid-cols-3 justify-between py-4">
                <div className="justify-self-end">
                  <img
                    src="/Logo Shinden.png"
                    className="h-16"
                    alt="Logo ARgg"
                  />
                </div>
                <div className="justify-self-center content-center">VS</div>
                <div className="justify-self-start">
                  <img src="/Logo Velox.png" className="h-16" alt="Logo ARgg" />
                </div>
              </div>
              <div className="px-2 text-base text-[#a1a1a1]">BO3</div>
            </div>
            <div className="py-2">
              <div className="flex justify-between px-2 text-base text-[#a1a1a1]">
                <div>05/09/2024, 11:30hs</div>
                <div>Counter-Strike 2</div>
              </div>
              <div className="grid grid-cols-3 justify-between py-4">
                <div className="justify-self-end">
                  <img
                    src="/Logo Shinden.png"
                    className="h-16"
                    alt="Logo ARgg"
                  />
                </div>
                <div className="justify-self-center content-center">VS</div>
                <div className="justify-self-start">
                  <img src="/Logo Velox.png" className="h-16" alt="Logo ARgg" />
                </div>
              </div>
              <div className="px-2 text-base text-[#a1a1a1]">BO3</div>
            </div>
          </div>
        </div>
        <div className="basis-2/5 pr-24">
          <div className="pb-3">
            <a>Ultimas discusiones</a>
          </div>
          <div className="flex flex-col bg-[#232240] rounded-lg">
            <div className="border-b border-b-[#9199E1]">Foro 1</div>
            <div className="border-b border-b-[#9199E1]">Foro 2</div>
            <div className="border-b border-b-[#9199E1]">Foro 3</div>
            <div>Foro 4</div>
          </div>
        </div>
        <div className="basis-1/5">
          <div className="pb-3">
            <a>Equipos mas visitados</a>
          </div>
          <div className="flex flex-col bg-[#232240] rounded-lg">
            <div className="border-b border-b-[#9199E1]">Equipo 1</div>
            <div className="border-b border-b-[#9199E1]">Equipo 2</div>
            <div className="border-b border-b-[#9199E1]">Equipo 3</div>
            <div>Equipo 4</div>
          </div>
        </div>
      </div>
    </>
  );
}
