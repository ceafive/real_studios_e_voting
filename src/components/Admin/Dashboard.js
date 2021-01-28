import React from "react";

import { addVoter, addCandidate } from "../../utils";
import { coreMembers } from "../../utils/tempData";

const Dashboard = () => {
  const [allVoters, setAllVoters] = React.useState([]);
  const [allCandidates, setAllCandidates] = React.useState(null);
  const [voterFormData, setVoterFormData] = React.useState({
    name: "",
    mobileNumber: "",
  });
  const [candidateFormData, setCandidateFormData] = React.useState({
    name: "",
    alias: "",
    pictureURL: "",
    position: "0",
  });
  const [voterLogs, setVoterLogs] = React.useState({
    adding: false,
    error: "",
    success: false,
    buttonText: "Add Voter",
  });
  const [candidateLogs, setCandidateLogs] = React.useState({
    adding: false,
    error: "",
    success: false,
    buttonText: "Add Candidate",
  });

  const handleSubmit = (group, add, data) => {
    let res = "";
    if (group === "voters") {
      setVoterLogs((data) => ({
        ...data,
        adding: true,
        buttonText: "Adding...",
      }));
    }

    if (group === "candidates") {
      setCandidateLogs((data) => ({
        ...data,
        adding: true,
        buttonText: "Adding...",
      }));
    }

    res = add(data);

    if (group === "voters") {
      setVoterLogs((data) => ({
        ...data,
        error: res ? res.error : "",
        adding: false,
        buttonText: "Add Voter",
      }));
      setVoterFormData({
        name: "",
        mobileNumber: "",
      });
    }

    if (group === "candidates") {
      setCandidateLogs((data) => ({
        ...data,
        error: res ? res.error : "",
        adding: false,
        buttonText: "Add Candidate",
      }));

      setCandidateFormData({
        name: "",
        alias: "",
        pictureURL: "",
        position: "0",
      });
    }
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
      <div className="w-1/4 max-w-lg my-10 mb-48">
        <form className=" bg-white shadow-md rounded px-8 py-8 pt-8">
          <div className="px-4 pb-4">
            <label htmlFor="name" className="text-sm block font-bold  pb-2">
              FULL NAME
            </label>
            <input
              type="text"
              value={voterFormData.name}
              onChange={(e) =>
                setVoterFormData((data) => ({
                  ...data,
                  [e.target.name]: e.target.value,
                }))
              }
              name="name"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              placeholder="Frederick Malan"
            />
          </div>
          <div className="px-4 pb-4">
            <label
              htmlFor="mobileNumber"
              className="text-sm block font-bold  pb-2"
            >
              VOTER MOBILE NUMBER
            </label>
            <input
              type="text"
              value={voterFormData.mobileNumber}
              name="mobileNumber"
              id="mobileNumber"
              onChange={(e) =>
                setVoterFormData((data) => ({
                  ...data,
                  [e.target.name]: e.target.value,
                }))
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              placeholder="0546277416"
            />
          </div>
          {voterLogs.error && (
            <p className="text-center text-red-500 text-xs">
              {voterLogs.error}
            </p>
          )}
          <div className="flex w-full justify-center">
            <button
              disabled={
                !voterFormData.name ||
                !voterFormData.mobileNumber ||
                voterFormData.mobileNumber.length !== 10 ||
                voterLogs.adding
              }
              className={`${
                !voterFormData.name ||
                !voterFormData.mobileNumber ||
                voterFormData.mobileNumber.length !== 10 ||
                voterLogs.adding
                  ? "bg-gray-500 cursor-default"
                  : "bg-blue-500 hover:bg-blue-700"
              }  text-white py-2 px-10 focus:outline-none focus:shadow-outline`}
              type="button"
              onClick={() => handleSubmit("voters", addVoter, voterFormData)}
            >
              {voterLogs.buttonText}
            </button>
          </div>
        </form>

        <form className=" bg-white shadow-md rounded px-8 py-8 pt-8 mt-10">
          <div className="px-4 pb-4">
            <label htmlFor="name" className="text-sm block font-bold  pb-2">
              CANDIDATE NAME
            </label>
            <input
              type="text"
              name="name"
              value={candidateFormData.name}
              id="name"
              onChange={(e) =>
                setCandidateFormData((data) => ({
                  ...data,
                  [e.target.name]: e.target.value,
                }))
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              placeholder="John Doe"
            />
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="alias" className="text-sm block font-bold  pb-2">
              CANDIDATE ALIAS
            </label>
            <input
              type="text"
              name="alias"
              value={candidateFormData.alias}
              id="alias"
              onChange={(e) =>
                setCandidateFormData((data) => ({
                  ...data,
                  [e.target.name]: e.target.value,
                }))
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              placeholder="John The Warrior"
            />
          </div>
          <div className="px-4 pb-4">
            <label
              htmlFor="pictureURL"
              className="text-sm block font-bold  pb-2"
            >
              PICTURE URL
            </label>
            <input
              type="text"
              name="pictureURL"
              id="pictureURL"
              value={candidateFormData.pictureURL}
              onChange={(e) =>
                setCandidateFormData((data) => ({
                  ...data,
                  [e.target.name]: e.target.value,
                }))
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              placeholder="https://images.unsplash.com/photo-1495681796091-d84e65e2ad51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80"
            />
          </div>

          <div className="w-full px-3 mb-6">
            <label htmlFor="position" className="text-sm block font-bold  pb-2">
              POSITION ASPIRING FOR
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="position"
                value={candidateFormData.position}
                onChange={(e) =>
                  setCandidateFormData((data) => ({
                    ...data,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                {coreMembers.map((member) => {
                  return (
                    <option key={member.name} value={member.id}>
                      {member.name}
                    </option>
                  );
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {candidateLogs.error && (
            <p className="text-center text-red-500 text-xs">
              {candidateLogs.error}
            </p>
          )}
          <div className="flex w-full justify-center">
            <button
              disabled={
                !candidateFormData.name ||
                !candidateFormData.alias ||
                !candidateFormData.pictureURL ||
                !candidateFormData.position ||
                candidateLogs.adding
              }
              className={`${
                !candidateFormData.name ||
                !candidateFormData.alias ||
                !candidateFormData.pictureURL ||
                !candidateFormData.position ||
                candidateLogs.adding
                  ? "bg-gray-500 cursor-default"
                  : "bg-blue-500 hover:bg-blue-700"
              }  text-white py-2 px-10 focus:outline-none focus:shadow-outline`}
              type="button"
              onClick={() =>
                handleSubmit("candidates", addCandidate, candidateFormData)
              }
            >
              {candidateLogs.buttonText}
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-wrap h-full">
        {allVoters.length > 0 && (
          <div className="w-full p-10 flex justify-center h-full">
            <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-green-50 to-green-200 p-10">
              <h1 className="font-bold text-3xl uppercase text-center">
                Voters Table
              </h1>
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th className="w-1/2 px-4 py-3 text-green-600">Name</th>
                    <th className="w-1/4 px-4 py-3 text-green-600">
                      Mobile Number
                    </th>
                    <th className="w-1/4 px-4 py-3 text-green-600">OTP</th>
                  </tr>
                </thead>
                <tbody>
                  {allVoters.map((voter, index) => {
                    return (
                      <tr key={index}>
                        <td className="border border-green-500 px-4 py-2 text-green-600 font-medium">
                          {voter.name}
                        </td>
                        <td className="border border-green-500 px-4 py-2 text-green-600 font-medium">
                          {voter.mobileNumber}
                        </td>
                        <td className="border border-green-500 px-4 py-2 text-green-600 font-medium">
                          {voter.otp}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {!allCandidates ? null : (
          <div className="w-full p-10 flex justify-center">
            <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-blue-50 to-blue-200 p-10">
              <h1 className="font-bold text-3xl uppercase text-center">
                Candidates Table
              </h1>

              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                const group = coreMembers.find((member) => member.id === item);
                return (
                  <>
                    <h1 className="font-bold uppercase text-center mt-3">
                      {group.name} Candidates
                    </h1>
                    <table key={index} className="table-fixed ">
                      <thead>
                        <tr>
                          <th className="w-1/2 px-4 py-3 text-blue-600">
                            Name
                          </th>
                          <th className="w-1/2 px-4 py-3 text-blue-600">
                            Alias
                          </th>
                          <th className="w-1/4 px-4 py-3 text-blue-600">
                            Picture
                          </th>
                          <th className="w-1/4 px-4 py-3 text-blue-600">
                            Team
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {allCandidates[item].members.map((candidate, index) => {
                          return (
                            <tr key={index}>
                              <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">
                                {candidate.name}
                              </td>
                              <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">
                                {candidate.alias}
                              </td>
                              <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">
                                <div>
                                  <img
                                    src={candidate.pictureURL}
                                    alt={candidate.name}
                                    className="object-cover h-24 w-32"
                                  />
                                </div>
                              </td>
                              <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">
                                {candidate.team}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
