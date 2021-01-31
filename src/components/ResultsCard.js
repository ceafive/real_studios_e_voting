import React from "react";

const ResultsCard = ({ groupName, group }) => {
  return (
    <div className="w-1/6 rounded-lg text-white p-3 shadow-2xl m-1 bg-gray-800 hover:bg-blue-800 cursor-pointer">
      <h1 className="font-black">{groupName}</h1>
      {group.members.map((member, index) => {
        return (
          <div key={index} className="w-full flex justify-between text-sm">
            <p>{member.name}</p>
            <p>{member.votes}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ResultsCard;
