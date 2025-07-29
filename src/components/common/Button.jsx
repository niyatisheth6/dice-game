import React from "react";

function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`text-[1rem] py-2.5 w-[13.75rem] rounded-md font-semibold border border-transparent ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
