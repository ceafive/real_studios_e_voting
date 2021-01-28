import React from "react";

const Navbar = ({ setShowLogin, setShowDashboard }) => {
  return (
    <div className="flex w-full justify-between items-center py-2 px-5">
      <h1
        className="text-blue-400 cursor-pointer"
        onClick={() => {
          setShowLogin(false);
          setShowDashboard(false);
        }}
      >
        XtraClass
      </h1>

      <div className="flex items-center">
        <ion-icon name="search-outline"></ion-icon>
        <div
          className="flex justify-between items-center border border-blue-400 rounded-2xl px-4 py-1 ml-5 cursor-pointer"
          onClick={() => {
            setShowLogin(false);
            setShowDashboard(true);
          }}
        >
          <button className="focus:outline-none">Dashboard</button>
        </div>
        <div
          className="flex justify-between items-center border border-blue-400 rounded-2xl px-4 py-1 ml-5 cursor-pointer"
          onClick={() => {
            setShowDashboard(false);
            setShowLogin(true);
          }}
        >
          <ion-icon name="person"></ion-icon>

          <button className="ml-5 focus:outline-none">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
