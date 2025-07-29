import React from "react";

import { useNavigate } from "react-router-dom";

import dices from "../assets/img/dices.svg";

import Button from "./common/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[90rem] mx-auto bg-white min-h-screen flex items-center justify-center gap-2.5 px-8">
      <img src={dices} alt="dices" />

      <div>
        <h1 className="text-black font-bold text-[6rem]">DICE GAME</h1>
        <div className="flex justify-end">
          <Button
            className="bg-black text-white"
            onClick={() => navigate("/dashboard")}
          >
            Play Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
