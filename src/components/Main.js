import React from "react";

import CoreMembers from "./CoreMembers";
import AuxilliaryMembers from "./AuxilliaryMembers";

const Main = ({
  candidates,
  compToRender,
  groupClicked,
  votedIn,
  setVotedIn,
  setGroupClicked,
}) => {
  return (
    <div className="min-h-full w-full">
      {compToRender === 0 ? (
        <CoreMembers
          candidates={candidates}
          votedIn={votedIn}
          setVotedIn={setVotedIn}
          groupClicked={groupClicked}
          setGroupClicked={setGroupClicked}
        />
      ) : (
        <AuxilliaryMembers compToRender={compToRender} />
      )}
    </div>
  );
};

export default Main;
