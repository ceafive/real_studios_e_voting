import React from "react";

import { addVoter, addCandidate } from "../../utils";
import CandidatesTable from "./CandidatesTable";
import VotersTable from "./VotersTable";
import MembersForm from "./MembersForm";

const initialvoterFormData = {
  name: "",
  mobileNumber: "",
};

const initialcandidateFormData = {
  name: "",
  alias: "",
  pictureURL: "",
  position: "0",
};
const initialvoterLogs = {
  adding: false,
  error: "",
  success: false,
  buttonText: "Add Voter",
};
const initialcandidateLogs = {
  adding: false,
  error: "",
  success: false,
  buttonText: "Add Candidate",
};

const Dashboard = () => {
  const [allVoters, setAllVoters] = React.useState([]);
  const [allCandidates, setAllCandidates] = React.useState(null);
  const [voterFormData, setVoterFormData] = React.useState(
    initialvoterFormData
  );
  const [candidateFormData, setCandidateFormData] = React.useState(
    initialcandidateFormData
  );
  const [voterLogs, setVoterLogs] = React.useState(initialvoterLogs);
  const [candidateLogs, setCandidateLogs] = React.useState(
    initialcandidateLogs
  );

  const onSubmit = (group, category, fn) => {
    if (group === category) {
      fn((data) => ({
        ...data,
        adding: true,
        buttonText: "Adding...",
      }));
    }
  };

  const onEnd = (group, category, fn1, fn2, data, buttonText, res) => {
    if (group === category) {
      fn1((data) => ({
        ...data,
        error: res ? res.error : "",
        adding: false,
        buttonText,
      }));
      fn2(data);
    }
  };

  const addNewUserOrCandidate = (group, add, data) => {
    let res = "";
    onSubmit(group, "voters", setVoterLogs);
    onSubmit(group, "candidates", setCandidateLogs);

    res = add(data);

    onEnd(
      group,
      "voters",
      setVoterLogs,
      setVoterFormData,
      initialvoterFormData,
      "Add Voter",
      res
    );
    onEnd(
      group,
      "candidates",
      setCandidateLogs,
      setCandidateFormData,
      initialcandidateFormData,
      "Add Candidate",
      res
    );
  };

  React.useEffect(() => {
    const storageData = localStorage.getItem("real_studios");

    if (storageData) {
      const parsedData = JSON.parse(storageData);
      const { voters, candidates } = parsedData;
      if (voters) {
        setAllVoters(voters);
      }

      if (candidates) {
        setAllCandidates(candidates);
      }
    }

    return () => {};
  }, [voterLogs, candidateLogs]);

  return (
    <div className="flex w-full justify-between px-20 pt-10">
      <MembersForm
        voterFormData={voterFormData}
        setVoterFormData={setVoterFormData}
        voterLogs={voterLogs}
        handleSubmit={addNewUserOrCandidate}
        addVoter={addVoter}
        candidateFormData={candidateFormData}
        setCandidateFormData={setCandidateFormData}
        candidateLogs={candidateLogs}
        addCandidate={addCandidate}
      />
      <div className="flex flex-wrap h-full">
        <VotersTable allVoters={allVoters} />
        <CandidatesTable allCandidates={allCandidates} />
      </div>
    </div>
  );
};

export default Dashboard;
