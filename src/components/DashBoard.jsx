import React, { useState } from "react";

import Button from "./common/Button";
import Rules from "./Rules";
import Dice from "./Dice";
import SelectNumber from "./SelectNumber";
import TotalScroll from "./TotalScroll";

function DashBoard() {
  const [isShowRules, setIsShowRules] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [showError, setShowError] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleDiceClick = () => {
    if (!selectedNumber) {
      setShowError(true);
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);
    if (randomNumber === selectedNumber) {
      setTotalCount((prev) => prev + randomNumber);
    } else {
      setTotalCount((prev) => prev - 2);
    }
    setSelectedNumber(null);
  };

  const handleResetClick = () => {
    setSelectedNumber(null);
    setTotalCount(0);
  };

  return (
    <div className="max-w-[90rem] mx-auto bg-white min-h-screen flex gap-2.5 flex-col px-8">
      {/* header  */}
      <div className="flex justify-between items-center">
        <TotalScroll totalCount={totalCount} />
        <SelectNumber
          setSelectedNumber={setSelectedNumber}
          setShowError={setShowError}
          selectedNumber={selectedNumber}
          showError={showError}
        />
      </div>
      {/* dices  */}
      <div className="flex flex-col justify-center items-center">
        <Dice handleDiceClick={handleDiceClick} currentDice={currentDice} />

        <Button
          onClick={handleResetClick}
          className="bg-white  !border-black mb-6"
        >
          Reset Score
        </Button>
        <Button
          onClick={() => setIsShowRules(true)}
          className="bg-black text-white"
        >
          Show Rules
        </Button>
      </div>

      {/* Rules */}
      {isShowRules && <Rules />}
    </div>
  );
}

export default DashBoard;
