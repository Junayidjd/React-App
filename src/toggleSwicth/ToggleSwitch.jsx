import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIson] = useState(false);

  const handleToggleSwitch = () => {
    setIson(!isOn);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={handleToggleSwitch}
        className={`cursor-pointer w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
          isOn ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? "translate-x-8" : "translate-x-0"
          }`}
        ></div>
      </div>
      <div className="ml-4 text-lg font-semibold">
        <span>{isOn ? "On" : "Off"}</span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
