import React from "react";
import { colors } from "../constants/colors";

function Results() {
  const resluts = [
    "Person Surname1",
    "Person Surname2",
    "Person Surname3",
    "Person Surname4",
    "Person Surname5",
  ];

  return (
    <div className="w-full text-center mt-4">
      <h1 className="text-slate-50 text-3xl font-semibold pb-4">Results:</h1>
      <div className="flex gap-4 flex-wrap justify-center">
        {resluts.map((res, index) => {
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
              {index + 1 + ". " + res}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Results;
