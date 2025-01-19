import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/Forgetpass.css";

const Forgetpass = () => {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate("/ResetCode"); // به مسیر دلخواه هدایت می‌شود
  };

  return (
    <div className="Forgetpass-body">
      <div className="Forgetpass-container">
        <div className="Forgetpass-forms">
          <div className="Forgetpass-form-content">
            <div className="pass-login-form">
              <form onSubmit={handleSubmit}>
                <div className="pass-input-boxes">
                  <div className="pass-input-box">
                    <i className="fa fa-question-circle"></i>
                    <input
                      type="text"
                      placeholder="Enter your Username or Email"
                      required
                    />
                  </div>
                  <div className="button pass-input-box">
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

export default Forgetpass;
