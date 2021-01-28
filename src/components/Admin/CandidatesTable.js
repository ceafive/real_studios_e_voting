import React from "react";
import { coreMembers } from "../../utils/tempData";

const CandidatesTable = ({ allCandidates }) => {
  return (
    <>
      {!allCandidates ? null : (
        <div className="w-full p-10 flex justify-center">
          <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-blue-50 to-blue-200 p-10">
            <h1 className="font-bold text-3xl uppercase text-center">
              Candidates Table
            </h1>

            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              const group = coreMembers.find((member) => member.id === item);
              return (
                <div key={index}>
                  <h1 className="font-bold uppercase text-center mt-3">
                    {group.name} Candidates
                  </h1>
                  <table className="table-fixed ">
                    <thead>
                      <tr>
                        <th className="w-1/2 px-4 py-3 text-blue-600">Name</th>
                        <th className="w-1/2 px-4 py-3 text-blue-600">Alias</th>
                        <th className="w-1/4 px-4 py-3 text-blue-600">
                          Picture
                        </th>
                        <th className="w-1/4 px-4 py-3 text-blue-600">Team</th>
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
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default CandidatesTable;
