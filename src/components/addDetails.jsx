import React from "react";

function AddDetails(props) {
  return (
    <div className="w-max mt-8">
      <h1 className="text-slate-50 text-2xl font-semibold">
        Add your details:
      </h1>
      <div className="grid gap-4 w-48">
        <label className="font-semibold text-gray-300 text-lg">
          Enter your Name:
        </label>
        <input
          type="text"
          placeholder="Your name..."
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
        <button
          onClick={props.handleAddDetails}
          className="bg-[#5e6ad2]/80 text-white p-2 rounded-lg hover:bg-[#5e6ad2] cursor-pointer font-medium"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddDetails;
