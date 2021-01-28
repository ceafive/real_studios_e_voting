import React from "react";
import { coreMembers } from "../../utils/tempData";

const CandidateForm = ({
  candidateFormData,
  setCandidateFormData,
  candidateLogs,
  handleSubmit,
  addCandidate,
}) => {
  return (
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
        <label htmlFor="pictureURL" className="text-sm block font-bold  pb-2">
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
  );
};

export default CandidateForm;
