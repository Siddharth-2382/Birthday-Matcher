import React, { useState } from "react";
import { formatDate } from "./utils";

function SearchByDate({ setSearch }) {
  // State hook for the date input
  const [date, setDate] = useState("");

  // Function to handle the search action
  const handleSearchClick = () => {
    if (date) {
      // Formatting the date before setting the search
      const formattedDate = formatDate(date);
      setSearch(formattedDate);
    }
  };

  // JSX for rendering the search component
  return (
    <div className="flex flex-col items-center">
      <div className="grid gap-4 w-48">
        {/* Input for date selection */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="focus:border-[#5e6ad2] focus:outline-none border rounded-lg p-1 cursor-pointer"
          // Trigger search on pressing Enter
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchClick();
            }
          }}
        />
        {/* Button to initiate search */}
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
