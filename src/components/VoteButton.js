import React from "react";

const VoteButton = ({ member, groupClicked, setVotedIn }) => {
  return (
    <div className="hide absolute top-0 flex flex-col justify-center items-center w-full h-full overflow-hidden rounded-lg">
      <div className="flex flex-wrap justify-center h-32 w-32">
        <img
          src="https://toppng.com/uploads/preview/fingerprint-png-11552949322aqztzlkylu.png"
          alt="thumbprint"
          className="h-24 w-full"
        />
        <button
          className="px-6 py-2 border border-gray-300 text-white rounded-lg my-3"
          onClick={() =>
            setVotedIn((votes) => [
              ...votes,
              {
                groupVotedIn: groupClicked,
                votedFor: { ...member, votes: member.votes + 1 },
              },
            ])
          }
        >
          Vote
        </button>
      </div>
    </div>
  );
};

export default VoteButton;
