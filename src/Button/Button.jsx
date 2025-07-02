import React from "react";
import "./Button.css";

const Button = () => {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <button className="px-6 py-3 min-w-[120px] bg-pink-600 text-white border-2 border-transparent rounded-[20px] cursor-pointer transition-all duration-300 hover:bg-pink-400 hover:border-pink-600">
        Fetch Users
      </button>
      <button
        id="clear-btn"
        className="px-6 py-3 min-w-[120px] bg-pink-600 text-white border-2 border-transparent rounded-[20px] cursor-pointer transition-all duration-300 hover:bg-pink-400 hover:border-pink-600"
      >
        Clear
      </button>
    </div>
  );
};

export default Button;
