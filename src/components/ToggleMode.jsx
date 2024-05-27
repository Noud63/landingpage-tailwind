import React, { useState } from "react";
// import { darkmode } from '../assets/icons'

const ToggleMode = ({ setDarkmode, darkMode }) => {
  const toggleMode = () => {
    setDarkmode(!darkMode);
  };

  return (
    <div className="w-8 h-8 cursor-pointer">
      <img
        src="/images/darkmode.png"
        alt="darkmode"
        className="w-50 h-50"
        onClick={toggleMode}
      />
    </div>
  );
};

export default ToggleMode;
