import React from "react";

function AddDetails(props) {
  return (
    <div className="flex flex-col w-full items-center mt-8">
      <h1 className="text-slate-50 text-2xl font-semibold pb-4">
        Add your personal details:
      </h1>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 w-100">
        <label className="font-semibold text-gray-300 text-lg">
          Enter your Name:
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="focus:border-[#5e6ad2] focus:outline-none plac border rounded-lg p-1"
        />
        <label className="font-semibold text-gray-300 text-lg">
          Enter your Birth Date:
        </label>
        <input
          type="date"
          placeholder="Your name..."
          className="focus:border-[#5e6ad2] focus:outline-none border rounded-lg p-1 cursor-pointer"
        />
      </div>
      <button
        onClick={props.handleAddDetails}
        className="bg-[#5e6ad2]/80 text-white p-2 mt-4 w-24 rounded-lg hover:bg-[#5e6ad2] cursor-pointer font-medium"
      >
        Add
      </button>
    </div>
  );
}

export default AddDetails;
