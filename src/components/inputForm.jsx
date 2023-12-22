import React from "react";

function InputForm() {
  const handleBirthdateSearch = () => {};
  const handleRegularSearch = () => {};
  return (
    <div className="flex gap-8">
      <div className="grid gap-4">
        <h1 className="text-slate-50 text-2xl font-semibold pb-4">
          Search by Birth Date:
        </h1>
        <label className="font-semibold text-gray-300 text-lg">
          Enter your Name:
        </label>
        <input
          type="text"
          placeholder="Your name..."
          className="focus:border-[#5e6ad2] focus:outline-none plac border rounded-lg p-1"
        />
        <label className="font-semibold text-gray-300 text-lg">
          Select your Birth Date:
        </label>
        <input
          type="date"
          placeholder="Your name..."
          className="focus:border-[#5e6ad2] focus:outline-none border rounded-lg p-1 cursor-pointer"
        />
        <button
          onClick={handleBirthdateSearch}
          className="bg-[#5e6ad2]/80 text-white p-2 rounded-lg hover:bg-[#5e6ad2] cursor-pointer font-medium"
        >
          Submit
        </button>
      </div>
      <div className=" border-l-2"></div>
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
            onClick={handleRegularSearch}
            className="bg-[#5e6ad2]/80 text-white p-2 rounded-lg hover:bg-[#5e6ad2] cursor-pointer font-medium"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputForm;
