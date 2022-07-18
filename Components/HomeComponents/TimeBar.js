import React from "react";

function TimeBar({ type, number }) {
  return (
    <div className="w-16 h-24 bg-gray-100 flex flex-col items-center justify-center rounded-lg shadow-md">
      <p className="text-lg text-black font-bold">{number}</p>
      <h3 className="text-xs font-medium">{type}</h3>
    </div>
  );
}

export default TimeBar;
