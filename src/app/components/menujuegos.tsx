import React from "react";
import {
  Joystick,
  LoL,
  CS,
  Valo,
  Dota,
  Fifa,
  R6,
  Rocket,
  PUBG,
  MobileLegends,
  Fortnite,
  Sim,
} from "./logos";

const MenuJuegos: React.FC = () => {
  return (
    <div className="hidden md:block">
      <div className="flex justify-center py-14">
        <div className="flex flex-row bg-[#232240] p-3 rounded-lg">
          <div className="px-2">
            <Joystick />
          </div>
          <div className="px-2">
            <a>Todos los juegos</a>
          </div>
        </div>
        <div className="px-10">
          <LoL />
        </div>
        <div className="px-10">
          <CS />
        </div>
        <div className="px-10">
          <Valo />
        </div>
        <div className="px-10">
          <Dota />
        </div>
        <div className="px-10">
          <Fifa />
        </div>
        <div className="px-10">
          <R6 />
        </div>
        <div className="px-10">
          <Rocket />
        </div>
        <div className="px-10">
          <PUBG />
        </div>
        <div className="px-10">
          <MobileLegends />
        </div>
        <div className="px-10">
          <Fortnite />
        </div>
        <div className="px-10">
          <Sim />
        </div>
      </div>
    </div>
  );
};

export default MenuJuegos;
