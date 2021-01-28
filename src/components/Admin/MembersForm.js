import React from "react";
import CandidateForm from "./CandidateForm";
import VoterForm from "./VoterForm";

const MembersForm = ({
  voterFormData,
  setVoterFormData,
  voterLogs,
  handleSubmit,
  addVoter,
  candidateFormData,
  setCandidateFormData,
  candidateLogs,
  addCandidate,
}) => {
  return (
    <div className="w-1/4 max-w-lg my-10 mb-48">
      <VoterForm
        voterFormData={voterFormData}
        setVoterFormData={setVoterFormData}
        voterLogs={voterLogs}
        handleSubmit={handleSubmit}
        addVoter={addVoter}
      />
      <CandidateForm
        candidateFormData={candidateFormData}
        setCandidateFormData={setCandidateFormData}
        candidateLogs={candidateLogs}
        handleSubmit={handleSubmit}
        addCandidate={addCandidate}
      />
    </div>
  );
};

export default MembersForm;
