import React from "react";
import "./style/ResetCode.css";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// پوریا اگه میخوای وفتی کد درست بود بره به هوم، خط 15 و 4 رو از کامنت خارج کن
const ResetCode = () => {

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Code submitted!");
    
    // navigate("/");
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
                    <input type="submit" value="Submit"  />                    

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
