import React, { useState, useEffect } from "react";
import { Contract, networks } from "who-do-i-share-my-birthday-with";
import { formatDate } from "./utils";
import { isConnected, getPublicKey } from "@stellar/freighter-api";

let addressLookup = (async () => {
  if (await isConnected()) return getPublicKey();
})();

const birthdayContract = new Contract({
  contractId: networks.futurenet.contractId,
  networkPassphrase: networks.futurenet.networkPassphrase,
  rpcUrl: "https://rpc-futurenet.stellar.org/",
});

function AddDetails() {
  const [address, setAddress] = useState(undefined);
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");

  useEffect(() => {
    if (address !== undefined) return;

    addressLookup.then((user) => {
      if (user) setAddress(user);
    });
  }, [address]);

  const handleAddDetails = () => {
    const formattedDate = formatDate(birthDate);
    birthdayContract
      .submitBirthday({
        user: name,
        date: formattedDate,
      })
      .then((result) => {
        result
          .signAndSend()
          .then((_) => {})
          .catch((error) => {
            console.error("Error signing and sending transaction:", error);
          });
        setName("");
        setBirthDate("");
      })
      .catch((error) => {
        console.error("Error submitting details:", error);
      });
  };

  return (
    <div className="flex flex-col w-full items-center mt-60">
      <h1 className="text-slate-50 text-2xl font-semibold pb-4">
        Add your personal details:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-2 md:gap-x-4 lg:gap-x-4 gap-y-2 md:gap-y-4 lg:gap-y-4 w-64 md:w-96 lg:w-96">
        <label className="font-semibold text-gray-300 text-lg">
          Enter your Name:
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="focus:border-[#5e6ad2] focus:outline-none border rounded-lg p-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="font-semibold text-gray-300 text-lg">
          Enter your Birth Date:
        </label>
        <input
          type="date"
          className="focus:border-[#5e6ad2] focus:outline-none border rounded-lg p-1 cursor-pointer"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <button
        onClick={handleAddDetails}
        className="bg-[#5e6ad2]/80 text-white p-2 mt-4 w-24 rounded-lg hover:bg-[#5e6ad2] cursor-pointer font-medium"
      >
        Add
      </button>
    </div>
  );
}

export default AddDetails;
