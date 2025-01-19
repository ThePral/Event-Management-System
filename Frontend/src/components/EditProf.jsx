import React, { useState } from "react";
import "./style/EditProf.css";

const EditProf = () => {
  const [profileImage, setProfileImage] = useState("4.png");

  const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="Reset-body">
      <div className="Reset-container row">
        <div className="Reset-forms col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="Reset-form-content">
            <div className="login-form">
              <div className="upload-container">
                <label htmlFor="profileImage" className="upload-label">
                  <img
                    id="profilePreview"
                    src={profileImage}
                    alt="Profile"
                    className="rounded-circle img-thumbnail"
                  />
                </label>
                <input
                  type="file"
                  id="profileImage"
                  className="d-none"
                  accept="image/*"
                  onChange={previewImage}
                />
              </div>
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <input type="text" placeholder=" Username :" required />
                  </div>
                  <div className="input-box">
                    <input type="email" placeholder=" Email :" required />
                  </div>
                  <div className="input-box">
                    <input type="password" placeholder=" Password :" required />
                  </div>
                  <div className="input-box">
                    <input type="text" placeholder=" PhoneNumber :" required />
                  </div>
                  <div className="button input-box">
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

export default EditProf;
