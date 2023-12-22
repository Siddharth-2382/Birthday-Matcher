import React, { useState } from "react";
import { formatDate } from "./utils";

function SearchByDate({ setSearch }) {
  const [date, setDate] = useState("");

  const handleSearchClick = () => {
    if (date) {
      const formattedDate = formatDate(date);
      setSearch(formattedDate);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid gap-4 w-48">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="focus:border-[#5e6ad2] focus:outline-none border rounded-lg p-1 cursor-pointer"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchClick();
            }
          }}
        />
        <button
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchClick();
            }
          }}
          onClick={handleSearchClick}
          className="bg-[#5e6ad2]/80 text-white p-2 rounded-lg hover:bg-[#5e6ad2] cursor-pointer font-medium"
        >
          Find Out!
        </button>
      </div>
    </div>
  );
}

export default SearchByDate;
