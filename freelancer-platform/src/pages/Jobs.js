import React from "react";

const Jobs = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Job Board</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {Array(6).fill(0).map((_, idx) => (
          <div key={idx} className="border p-4 rounded-md shadow-md">
            <h3 className="font-bold">Job Title {idx + 1}</h3>
            <p className="text-gray-700">Short description of the job.</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
