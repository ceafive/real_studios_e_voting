import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Admin/Dashboard";

import { members } from "./utils/tempData";

function App() {
  const [compToRender, setCompToRender] = React.useState(0);
  const [groupClicked, setGroupClicked] = React.useState(0);
  const [votedIn, setVotedIn] = React.useState([]);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showDashboard, setShowDashboard] = React.useState(false);
  const [candidates, setCandidates] = React.useState(members);
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const storageData = localStorage.getItem("real_studios");

    if (storageData) {
      const parsedData = JSON.parse(storageData);
      const { auth, candidates } = parsedData;

      if (!candidates) {
        localStorage.setItem(
          "real_studios",
          JSON.stringify({ ...parsedData, candidates: members })
        );
      } else {
        setCandidates(candidates);
      }

      if (auth) {
        const { isLoggedIn } = auth;
        setIsUserLoggedIn(isLoggedIn);
      }
    } else {
      localStorage.setItem(
        "real_studios",
        JSON.stringify({ candidates: members })
      );
    }

    return () => {};
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen w-full">
      <Navbar setShowLogin={setShowLogin} setShowDashboard={setShowDashboard} />
      {showDashboard ? (
        <Dashboard setShowDashboard={setShowDashboard} />
      ) : (
        <div className="w-full">
          <div className="bg-red-500 w-full">
            <Banner
              title="CCHN - Winneba"
              subtext1="College of Community Health Nursing"
              subtext2="2020/21 Academic year Elections"
            />
            {isUserLoggedIn && (
              <Menu
                compToRender={compToRender}
                setCompToRender={setCompToRender}
              />
            )}
          </div>
          {showLogin ? (
            <Auth
              setShowLogin={setShowLogin}
              setShowDashboard={setShowDashboard}
              setIsUserLoggedIn={setIsUserLoggedIn}
            />
          ) : isUserLoggedIn ? (
            <>
              <Main
                candidates={candidates}
                compToRender={compToRender}
                votedIn={votedIn}
                setVotedIn={setVotedIn}
                groupClicked={groupClicked}
                setGroupClicked={setGroupClicked}
              />
            </>
          ) : (
            <div className="min-h-screen w-full px-20 pt-10">
              <h1 className="text-center font-bold text-6xl">
                You must be logged in to vote
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
