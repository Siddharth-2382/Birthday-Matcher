import React from "react";

function SearchByDate(props) {
  return (
    <div className="flex-1">
      <h1 className="text-slate-50 text-2xl font-semibold pb-4">
        Or Search by date:
      </h1>
      <div className="grid gap-4">
        <label className="font-semibold text-gray-300 text-lg">
          Enter any Date:
        </label>
        <input
          type="date"
          placeholder="Your name..."
          className="focus:border-[#5e6ad2] focus:outline-none border rounded-lg p-1 cursor-pointer"
        />
        <button
          onClick={props.handleRegularSearch}
          className="bg-[#5e6ad2]/80 text-white p-2 rounded-lg hover:bg-[#5e6ad2] cursor-pointer font-medium"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SearchByDate;
