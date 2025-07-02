import { Heart } from "lucide-react";
import React from "react";

const HeartIcon = ({ id, onClickHandler, isFavorite }) => {
  return (
    <div
      className="flex flex-row-reverse m-4 p-4 cursor-pointer"
      onClick={() => onClickHandler(id)}
    >
      <Heart
        className={`text-red-600 hover:fill-red-600 ${
          isFavorite ? "fill-red-600" : ""
        }`}
      />
    </div>
  );
};

export default HeartIcon;
