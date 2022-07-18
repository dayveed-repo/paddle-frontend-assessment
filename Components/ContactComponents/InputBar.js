import React from "react";

function InputBar({ label, ...props }) {
  return (
    <div className="w-full mb-6 flex flex-col">
      <p className="text-sm text-gray-400 mb-2">{label}</p>
      {props.type === "textarea" ? (
        <textarea
          {...props}
          className="flex-grow max-w-xl rounded-lg shadow-md h-28 p-3 outline-none"
        />
      ) : (
        <input
          className="outline-none px-4 py-2 flex-grow rounded-lg shadow-md max-w-xl"
          {...props}
        />
      )}
    </div>
  );
}

export default InputBar;
