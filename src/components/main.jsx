import React from "react";
import SearchByDate from "./searchByDate";
import Results from "./results";
import AddDetails from "./addDetails";
import { useState } from "react";

function Main() {
  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col gap-4 items-center">
      <SearchByDate setSearch={setSearch} />
      <Results search={search} />
      <AddDetails />
    </div>
  );
}

export default Main;
