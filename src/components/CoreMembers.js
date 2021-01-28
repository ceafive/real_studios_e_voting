import React from "react";
import SideBar from "./SideBar";
import MembersDisplay from "./MembersDisplay";

const CoreMembers = ({
  candidates,
  groupClicked,
  votedIn,
  setVotedIn,
  setGroupClicked,
}) => {
  return (
    <div className="min-h-screen w-full px-20 pt-10 flex ">
      <SideBar
        votedIn={votedIn}
        groupClicked={groupClicked}
        setGroupClicked={setGroupClicked}
      />
      <MembersDisplay
        candidates={candidates}
        groupClicked={groupClicked}
        votedIn={votedIn}
        setVotedIn={setVotedIn}
      />
    </div>
  );
};

export default CoreMembers;
