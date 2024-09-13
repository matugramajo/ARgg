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
    <div className="overflow-auto">
      <div
        className="flex justify-start md:my-14 md:pb-5 pb-3 overflow-x-auto custom-scrollbar scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div
          className="flex flex-row bg-[#232240] p-3 rounded-lg"
          style={{ scrollSnapAlign: "start" }}
        >
          {" "}
          <div className="px-2">
            <Joystick />
          </div>
        </div>
        <div className="px-10" style={{ scrollSnapAlign: "start" }}>
          <LoL />
        </div>
        <div className="px-10" style={{ scrollSnapAlign: "start" }}>
          <CS />
        </div>
        <div className="px-10" style={{ scrollSnapAlign: "start" }}>
          <Valo />
        </div>
        <div className="px-10" style={{ scrollSnapAlign: "start" }}>
          <Dota />
        </div>
        <div className="px-10" style={{ scrollSnapAlign: "start" }}>
          <Fifa />
        </div>
        <div className="px-10" style={{ scrollSnapAlign: "start" }}>
          <R6 />
        </div>
        <div className="px-10" style={{ scrollSnapAlign: "start" }}>
          <Rocket />
        </div>
        <div className="px-10" style={{ scrollSnapAlign: "start" }}>
          <PUBG />
        </div>
        <div className="px-10" style={{ scrollSnapAlign: "start" }}>
          <MobileLegends />
        </div>
        <div className="px-10" style={{ scrollSnapAlign: "start" }}>
          <Fortnite />
        </div>
        <div className="px-10" style={{ scrollSnapAlign: "start" }}>
          <Sim />
        </div>
      </div>
    </div>
  );
};

export default MenuJuegos;
