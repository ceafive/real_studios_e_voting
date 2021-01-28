import React from "react";

const Banner = ({ title, subtext1, subtext2 }) => {
  return (
    <div id="banner" className="w-full" style={{ height: 250 }}>
      <div className="pl-20 pt-10 text-white">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="font-light">{subtext1}</p>
        <p className="font-light">{subtext2}</p>
      </div>
    </div>
  );
};

export default Banner;
