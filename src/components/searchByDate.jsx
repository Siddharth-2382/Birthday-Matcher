import React from "react";

function SearchByDate(props) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-slate-50 text-2xl font-semibold">
        Search Birthday matches:
      </h1>
      <div className="grid gap-4 w-48">
        <label className="font-semibold text-gray-300 text-lg text-center">
          Enter any date:
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
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchByDate;
