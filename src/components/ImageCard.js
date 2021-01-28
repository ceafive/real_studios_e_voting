import React from "react";

const ImageCard = ({ data }) => {
  return (
    <div className="image-card border rounded-lg overflow-hidden bg-white shadow-lg cursor-pointer">
      <div className="relative pb-2/3">
        <img
          src={data.pictureURL}
          alt={data.name}
          className="absolute top-0 object-cover h-full w-full"
        />
      </div>
      <div className="text-gray-600 px-4 py-3">
        <h3>{data.name}</h3>
        <p className="text-xs font-light leading-tight">{data.alias}</p>
      </div>
      <div style={{ backgroundColor: data.team.toLowerCase() }}>
        <p className="pl-4 py-2 font-semibold text-white text-sm">
          {data.team} team
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
