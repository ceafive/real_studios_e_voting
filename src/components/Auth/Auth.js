import React from "react";
import Login from "./Login";
import VerificationBox from "./VerificationBox";

const Auth = ({ setShowLogin, setShowDashboard, setIsUserLoggedIn }) => {
  const [showVerificationBox, setShowVerificationBox] = React.useState(false);
  const [otp, setOtp] = React.useState("");

  const checkOTP = () => {
    const storageData = localStorage.getItem("real_studios");
    const parsedData = JSON.parse(storageData);
    const { auth } = parsedData;

    const authOTP = auth.otp;
    if (authOTP === Number(otp)) {
      localStorage.setItem(
        "real_studios",
        JSON.stringify({ ...parsedData, auth: { ...auth, isLoggedIn: true } })
      );
      setShowLogin(false);
      setShowDashboard(false);
      setIsUserLoggedIn(true);
    } else {
      alert("Wrong PIN, try again");
    }
  };

  const onhandleChange = (otp) => {
    setOtp(otp);
  };

  const onClearOtp = () => {
    setOtp("");
  };

  return (
    <div className="flex w-full justify-center min-h-screen">
      {showVerificationBox ? (
        <VerificationBox
          otp={otp}
          onClearOtp={onClearOtp}
          onhandleChange={onhandleChange}
          setShowVerificationBox={setShowVerificationBox}
          checkOTP={checkOTP}
        />
      ) : (
        <Login setShowVerificationBox={setShowVerificationBox} />
      )}
    </div>
  );
};

export default Auth;
