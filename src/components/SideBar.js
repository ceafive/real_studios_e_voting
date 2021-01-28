import React from "react";

import { coreMembers } from "../utils/tempData";

const SideBar = ({ groupClicked, votedIn, setGroupClicked }) => {
  const [truncatedCoreMembers, setTruncatedCoreMembers] = React.useState([
    coreMembers[0],
  ]);

  React.useEffect(() => {
    const groupVOtedIn = votedIn.map((votedIn) => votedIn.groupVotedIn);
    const lastItem = groupVOtedIn[groupVOtedIn.length - 1];
    const noOfItems =
      lastItem === undefined ? 0 : lastItem !== 10 ? lastItem + 1 : 10;

    const newArray = [...coreMembers].slice(0, noOfItems + 1);
    setTruncatedCoreMembers(newArray);

    return () => {
      setTruncatedCoreMembers([coreMembers[0]]);
    };
  }, [votedIn]);

  return (
    <div className="w-1/3">
      {truncatedCoreMembers.map((member, index) => {
        return (
          <button
            key={member.id}
            className={`${
              member.id === groupClicked && "bg-green-500"
            } block text-white text-left bg-gray-400 px-4 w-64 py-2 rounded-lg focus:outline-none my-3`}
            onClick={() => {
              setGroupClicked(member.id);
              const groupVOtedIn = votedIn.map(
                (votedIn) => votedIn.groupVotedIn
              );
              const isIncluded = groupVOtedIn.includes(member.id);
              isIncluded && alert("You've already voted for this position");
            }}
          >
            {member.name}
          </button>
        );
      })}
    </div>
  );
};

export default SideBar;
