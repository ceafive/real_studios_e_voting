import React from "react";

const VotersTable = ({ allVoters }) => {
  return (
    <>
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
    </>
  );
};

export default VotersTable;
