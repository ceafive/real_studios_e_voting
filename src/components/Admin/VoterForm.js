import React from "react";

const VoterForm = ({
  voterFormData,
  setVoterFormData,
  voterLogs,
  handleSubmit,
  addVoter,
}) => {
  return (
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
        <label htmlFor="mobileNumber" className="text-sm block font-bold  pb-2">
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
        <p className="text-center text-red-500 text-xs">{voterLogs.error}</p>
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
  );
};

export default VoterForm;
