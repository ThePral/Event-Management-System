import React from "react";
import "./style/ResetCode.css";

const ResetCode = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // اینجا می‌توانید کد مدیریت ارسال فرم را اضافه کنید
    console.log("Code submitted!");
  };

  return (
    <div className="Reset-body">
      <div className="Reset-container">
        <div className="Reset-forms">
          <div className="Reset-form-content">
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <div className="Resetinput-boxes">
                  <div className="Reset-input-box">
                    <input
                      type="text"
                      placeholder="Code :"
                      required
                    />
                  </div>
                  <div className="button Reset-input-box">
                    <input type="submit" value="Submit" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetCode;
