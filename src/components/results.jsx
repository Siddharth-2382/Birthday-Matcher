import React, { useState, useEffect } from "react";
import { Contract, networks } from "who-do-i-share-my-birthday-with";
import { colors } from "../constants/colors";

// Initialize the birthday contract with specific network parameters
const birthdayContract = new Contract({
  contractId: networks.futurenet.contractId,
  networkPassphrase: networks.futurenet.networkPassphrase,
  rpcUrl: "https://rpc-futurenet.stellar.org/",
});

function Results({ search }) {
  // State hook for storing the search results
  const [results, setResults] = useState([]);

  // Effect hook to retrieve birthdays based on the search term
  useEffect(() => {
    if (search) {
      birthdayContract
        .getBirthdays({ date: search })
        .then((result) => {
          setResults(result.result);
        })
        .catch((error) => {
          console.error("Error retrieving birthdays:", error);
        });
    }
  }, [search]);

  // Styling adjustment based on the number of results
  const resultStyle = results.length === 0 ? { marginTop: "40px" } : {};

  // JSX for rendering the component
  return (
    <div className="w-full text-center" style={resultStyle}>
      <h1 className="text-slate-50 text-2xl font-semibold pb-4">Results:</h1>
      {/* Conditional rendering based on the search length and results */}
      {search.length > 0 &&
        (results.length > 0 ? (
          // Display results if available
          <div className="flex gap-4 flex-wrap justify-center">
            {results.map((res, index) => {
              // Random background color for each result
              const bgColor = colors[Math.floor(Math.random() * colors.length)];

              return (
                <p
                  key={index}
                  className={`text-slate-700 font-semibold ${bgColor} hover:cursor-pointer px-4 py-2 rounded-lg text-lg font-medium`}
                >
                  <img
                    src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${res}`}
                    alt="avatar"
                  />
                  {res}
                </p>
              );
            })}
          </div>
        ) : (
          // Prompt to add a friend if no results are found
          <p className="text-slate-50 text-lg font-medium">
            Add your friend if their birthday is on {search.replace(/-/g, " ")}!
          </p>
        ))}
    </div>
  );
}

export default Results;
