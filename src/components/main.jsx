import React from "react";
import SearchByDate from "./searchByDate";
import Results from "./results";
import AddDetails from "./addDetails";

function Main() {
  const handleAddDetails = () => {};
  const handleRegularSearch = () => {};
  return (
    <div className="flex flex-col gap-4 items-center">
      <SearchByDate handleRegularSearch={handleRegularSearch} />
      <Results />
      <AddDetails handleAddDetails={handleAddDetails} />
    </div>
  );
}

export default Main;
