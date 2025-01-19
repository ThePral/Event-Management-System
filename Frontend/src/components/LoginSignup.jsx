import React, { useState } from "react";
import "./style/LoginSignup.css";
import { Link } from "react-router-dom";



function LoginSignup() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="LoginSignup-body">
      <div className="LoginSignup-container">
        <input
          type="checkbox"
          id="flip"
          checked={isFlipped}
          onChange={() => setIsFlipped(!isFlipped)}
        />
        <div className="cover">
          <div className="front">
            {/* <img src={logo} alt="Logo" /> */}
              <img src="logo.png" alt="Logo" />

            <div className="text">
              <span className="text-1">Your Vision</span>
              <span className="text-2">Our Mission</span>
            </div>
          </div>
        </div>
        <div className="LoginSignup-forms">
          <div className={`LoginSignup-form-content ${isFlipped ? "flipped" : ""}`}>
            <div className="login-form">
              <div className="title">Log In</div>
              <form>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input type="text" placeholder="Enter your email" required />
                  </div>
                  <div className="input-box">
                    <i className="fa fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="text">
                    {/* <a href="forgetpass.html">Forgot password?</a> */}
                    <Link to="/forgetpass">Forgot password?</Link>
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div className="text sign-up-text">
                    Don't have an account?{" "}
                    <label onClick={() => setIsFlipped(true)}>Sign Up now</label>
                  </div>
                </div>
              </form>
            </div>

            <div className="signup-form">
              <div className="title">Sign Up</div>
              <form>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fa fa-user"></i>
                    <input
                      type="text"
                      placeholder="Enter your username"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fa fa-phone"></i>
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fa fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fa fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div className="text sign-up-text">
                    Already have an account?{" "}
                    <label onClick={() => setIsFlipped(false)}>
                      Log In now
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
