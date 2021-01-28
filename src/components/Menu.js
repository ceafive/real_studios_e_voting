import React from "react";
import { buttons } from "../utils/tempData";

const Menu = ({ compToRender, setCompToRender }) => {
  return (
    <div className="flex justify-start w-full px-20">
      {buttons.map((button, index) => {
        return (
          <button
            key={button.id}
            className={`${
              compToRender === index ? "bg-white" : "bg-gray-200"
            } px-5 py-2  text-gray-600 font-light focus:outline-none`}
            onClick={() => setCompToRender(button.id)}
          >
            {button.text}
          </button>
        );
      })}

      <button></button>
    </div>
  );
};

export default Menu;
