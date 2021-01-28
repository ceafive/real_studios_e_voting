import React from "react";

import ImageCard from "./ImageCard";
import VoteButton from "./VoteButton";

const MembersDisplay = ({
  candidates,
  groupClicked = 0,
  votedIn,
  setVotedIn,
}) => {
  const groupMembers = candidates ? candidates[groupClicked] : null;
  const membersData = groupMembers ? groupMembers.members : null;

  const [displayVoterCard, setDisplayVoterCard] = React.useState(true);

  React.useEffect(() => {
    const groupVOtedIn = votedIn.map((votedIn) => votedIn.groupVotedIn);
    const isIncluded = groupVOtedIn.includes(groupClicked);
    isIncluded ? setDisplayVoterCard(false) : setDisplayVoterCard(true);
  }, [groupClicked, votedIn]);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between ">
        {membersData &&
          membersData.map((member, index) => {
            return (
              <div key={index} className="relative w-56 h-auto rounded-lg">
                <ImageCard data={member} />
                {displayVoterCard ? (
                  <VoteButton
                    groupClicked={groupClicked}
                    member={member}
                    setVotedIn={setVotedIn}
                  />
                ) : (
                  <div className="hide absolute top-0 flex flex-col justify-center items-center w-full h-full overflow-hidden rounded-lg transition duration-500 ease-in-out">
                    <p className="text-white">You have voted!!!!!</p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MembersDisplay;
