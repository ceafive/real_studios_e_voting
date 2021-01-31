import React from "react";
import ResultsCard from "./ResultsCard";

import { members, coreMembers } from "../utils/tempData";

const AuxilliaryMembers = ({ compToRender }) => {
  const [allMembers, setAllMembers] = React.useState(members);

  React.useEffect(() => {
    const storageData = localStorage.getItem("real_studios");

    if (storageData) {
      const parsedData = JSON.parse(storageData);
      const { candidates } = parsedData;

      if (candidates) {
        setAllMembers(candidates);
      }
    }
    return () => {};
  }, [compToRender]);

  return (
    <div className="min-h-screen w-full p-8">
      <h1 className="text-center text-4xl font-bold">RESULTS</h1>
      <div className="w-full flex flex-wrap justify-between items-center">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => {
          const group = allMembers[number];
          const groupName = coreMembers.find((member) => member.id === number)
            .name;
          return (
            <ResultsCard key={number} groupName={groupName} group={group} />
          );
        })}
      </div>
    </div>
  );
};

export default AuxilliaryMembers;
