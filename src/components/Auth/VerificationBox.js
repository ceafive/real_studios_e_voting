import React from "react";
import OtpInput from "react-otp-input";

export default class App extends React.Component {
  handleChange = (otp) => this.props.onhandleChange(otp);
  clearOtp = () => this.props.onClearOtp();

  componentWillUnmount() {
    this.clearOtp();
  }

  render() {
    return (
      <div>
        <div className="shadow-lg rounded-lg mt-20 p-10 pt-2">
          <p className="text-center font-bold text-2xl my-3">
            Enter verification code
          </p>
          <div className="flex justify-center w-full">
            <OtpInput
              inputStyle={{
                width: 50,
                height: "3rem",
                margin: "0 1rem",
                fontSize: 20,
                borderRadius: "4px",
                border: "1px solid rgba(0,0,0,0.3)",
              }}
              value={this.props.otp}
              numInputs={6}
              onChange={this.handleChange}
              separator={<span>-</span>}
              isInputNum
              shouldAutoFocus
            />
          </div>
          <div className="flex w-full justify-center items-center my-5">
            <button
              className="px-6 py-2 bg-red-500 hover:bg-red-700 text-white mr-2 rounded shadow-lg"
              type="button"
              //   disabled={isDisabled}
              onClick={() => this.props.setShowVerificationBox(false)}
            >
              Cancel
            </button>
            <button
              className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white mr-2 rounded shadow-lg"
              type="button"
              //   disabled={isDisabled}
              onClick={this.clearOtp}
            >
              Clear
            </button>

            <button
              className={`${
                this.props.otp.length < 6
                  ? "bg-gray-500"
                  : "bg-green-500 hover:bg-green-700"
              } px-6 py-2  text-white rounded shadow-lg`}
              disabled={this.props.otp.length < 6}
              onClick={this.props.checkOTP}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
