"use client";

import { useState } from "react";

export default function Home() {
  const [usernameInput, setUsernameInput] = useState("");

  const searchSpendingsByUser = async () => {
    const res = await fetch(`http://127.0.0.1:8000/spendings/user/${usernameInput}`);
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="h-fit w-fit mb-20">
        <div className="text-4xl mb-12 text-blue-500">
          Welcome to Wallet Warden
        </div>
        <div>
          <input
            className="shadow-md shadow-slate-300 outline-none my-2 p-2 rounded-sm"
            type="text"
            placeholder="Enter your username"
            value={usernameInput}
            onChange={(e) => {
              setUsernameInput(e.target.value);
            }}
          />
          <div></div>
          <button className="my-2 px-3 py-2 rounded-md text-white bg-blue-400 hover:bg-blue-300 ease-in-out duration-100"
            onClick={searchSpendingsByUser}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
