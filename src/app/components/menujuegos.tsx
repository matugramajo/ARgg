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
  Apex,
  Overwatch,
  ArenaOf,
} from "./logos";

const MenuJuegos: React.FC = () => {
  return (
    <div className="bg-[#1c1a34] pt-2 md:pt-0">
      <div className="overflow-auto md:mx-40">
        <div
          className="flex justify-start md:ml-8 ml-5 md:mt-2 md:pb-2 pb-3 overflow-x-auto custom-scrollbar scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <div
            className="flex flex-row bg-[#232240] p-2 rounded-lg"
            style={{ scrollSnapAlign: "start" }}
          >
            {" "}
            <div className="px-2">
              <Joystick />
            </div>
          </div>
          <div
            className="px-10 self-center"
            style={{ scrollSnapAlign: "start" }}
          >
            <LoL />
          </div>
          <div
            className="px-10 self-center"
            style={{ scrollSnapAlign: "start" }}
          >
            <CS />
          </div>
          <div
            className="px-10 self-center"
            style={{ scrollSnapAlign: "start" }}
          >
            <Valo />
          </div>
          <div
            className="px-10 self-center"
            style={{ scrollSnapAlign: "start" }}
          >
            <Dota />
          </div>
          <div
            className="px-10 self-center"
            style={{ scrollSnapAlign: "start" }}
          >
            <Fifa />
          </div>
          <div
            className="px-10 self-center"
            style={{ scrollSnapAlign: "start" }}
          >
            <R6 />
          </div>
          <div
            className="px-10 self-center"
            style={{ scrollSnapAlign: "start" }}
          >
            <Rocket />
          </div>
          <div
            className="px-10 self-center"
            style={{ scrollSnapAlign: "start" }}
          >
            <PUBG />
          </div>
          <div
            className="px-10 self-center"
            style={{ scrollSnapAlign: "start" }}
          >
            <MobileLegends />
          </div>
          <div
            className="px-10 self-center"
            style={{ scrollSnapAlign: "start" }}
          >
            <Fortnite />
          </div>
          <div
            className="px-10 self-center"
            style={{ scrollSnapAlign: "start" }}
          >
            <Apex />
          </div>
          <div
            className="px-10 self-center"
            style={{ scrollSnapAlign: "start" }}
          >
            <Overwatch />
          </div>
          <div
            className="px-10 self-center"
            style={{ scrollSnapAlign: "start" }}
          >
            <ArenaOf />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuJuegos;
