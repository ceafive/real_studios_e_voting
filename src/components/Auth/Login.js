import React from "react";

import { sendOTP } from "../../utils";
const Login = ({ setShowVerificationBox }) => {
  const [loginFormData, setLoginFormData] = React.useState({ number: "" });
  const [loginLogs, setLoginLogs] = React.useState({
    error: false,
    success: false,
    sending: false,
  });
  const sendUserOTP = async () => {
    setLoginLogs({
      error: false,
      success: false,
      sending: true,
    });
    const storageData = localStorage.getItem("real_studios");

    if (!storageData) {
      return setLoginLogs((data) => ({
        ...data,
        sending: false,
        error: "You are not authorized to vote!!! Contact Admin",
      }));
    } else {
      const parsedData = JSON.parse(storageData);
      const { voters } = parsedData;

      if (!voters) {
        return setLoginLogs((data) => ({
          ...data,
          sending: false,
          error: "You are not authorized to vote!!! Contact Admin",
        }));
      }

      const found = voters.find(
        (voter) => voter.mobileNumber === loginFormData.number
      );

      if (!found) {
        return setLoginLogs((data) => ({
          ...data,
          sending: false,
          error: "You are not authorized to vote!!! Contact Admin",
        }));
      }

      const parseNumber = found.mobileNumber.slice(1);
      const formatNumber = `+233${parseNumber}`;
      const message = `Hello ${found.name}, this is your verification code ${found.otp}`;

      const res = await sendOTP(formatNumber, message);

      if (res.success) {
        localStorage.setItem(
          "real_studios",
          JSON.stringify({
            ...parsedData,
            auth: {
              ...found,
            },
          })
        );
        setLoginLogs((data) => ({
          ...data,
          sending: false,
        }));
        return setShowVerificationBox(true);
      }
      setLoginLogs((data) => ({
        ...data,
        sending: false,
        error: "An error occurred try again!!!!",
      }));
    }
  };
  return (
    <div className="mt-20">
      <form className=" bg-white shadow-md rounded px-8 py-8 pt-8">
        <div className="px-4 pb-2">
          <label htmlFor="number" className="text-sm block font-bold  pb-2">
            MOBILE NUMBER
          </label>
          <input
            type="text"
            name="number"
            id="number"
            value={loginFormData.number}
            onChange={(e) =>
              setLoginFormData((data) => ({
                ...data,
                [e.target.name]: e.target.value,
              }))
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
            placeholder="0546277416"
          />
        </div>
        {loginLogs.error && (
          <p className="text-xs text-red-500 text-center my-1">
            {loginLogs.error}
          </p>
        )}
        <div className="flex w-full justify-center">
          <button
            disabled={
              !loginFormData.number ||
              loginFormData.number.length !== 10 ||
              loginLogs.sending
            }
            className={`${
              !loginFormData.number ||
              loginFormData.number.length !== 10 ||
              loginLogs.sending
                ? "bg-gray-500 cursor-default"
                : "bg-blue-500 hover:bg-blue-700"
            }  text-white py-2 px-10 focus:outline-none focus:shadow-outline mr-1`}
            type="button"
            onClick={() => {
              sendUserOTP();
            }}
          >
            {loginLogs.sending ? "Sending..." : "Sign In"}
          </button>
          <button
            className={`
                 bg-green-500 hover:bg-green-700
              text-white py-2 px-10 focus:outline-none focus:shadow-outline`}
            type="button"
            onClick={() => {
              setShowVerificationBox(true);
            }}
          >
            Enter Code
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
