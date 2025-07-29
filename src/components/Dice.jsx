import React from "react";

import dice1 from "../assets/img/dice_1.svg";
import dice2 from "../assets/img/dice_2.svg";
import dice3 from "../assets/img/dice_3.svg";
import dice4 from "../assets/img/dice_4.svg";
import dice5 from "../assets/img/dice_5.svg";
import dice6 from "../assets/img/dice_6.svg";


function Dice({ handleDiceClick, currentDice }) {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  return (
    <>
      <button onClick={handleDiceClick}>
        <img src={diceImages[currentDice - 1]} alt={`dice${currentDice}`} />
      </button>
      <p className=" font-medium text-2xl text-center mb-[2.25rem]">
        Click on Dice to roll
      </p>
    </>
  );
}

export default Dice;
