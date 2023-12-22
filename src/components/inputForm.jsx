import React from "react";
import SearchByDate from "./searchByDate";
import SearchByBirthdate from "./searchByBirthdate";

function InputForm() {
  const handleBirthdateSearch = () => {};
  const handleRegularSearch = () => {};
  return (
    <div className="flex gap-8">
      <SearchByBirthdate handleBirthdateSearch={handleBirthdateSearch} />
      <div className=" border-l-2"></div>
      <SearchByDate handleRegularSearch={handleRegularSearch} />
    </div>
  );
}

export default InputForm;
