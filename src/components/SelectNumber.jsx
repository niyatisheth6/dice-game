import React from 'react'

function SelectNumber({setSelectedNumber,setShowError,selectedNumber, showError}) {
  return (
    <div>
    <div className="flex gap-6 mb-[1.875rem] relative">
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <button
          key={num}
          onClick={() => {
            setSelectedNumber(num);
            setShowError(false);
          }}
          className={`border border-black w-[4.5rem] h-[4.5rem] font-bold text-2xl ${
            num === selectedNumber && "bg-black text-white"
          }`}
        >
          {num}
        </button>
      ))}
      {showError && (
        <span className="text-red-500 text-xl absolute bottom-[-1.875rem] right-0">
          You have not selected any number
        </span>
      )}
    </div>
    <span className="text-2xl font-bold block text-end">
      {" "}
      Select Number
    </span>
  </div>
  )
}

export default SelectNumber