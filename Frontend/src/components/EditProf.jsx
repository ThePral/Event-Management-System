import React, { useState } from "react";
import "./style/EditProf.css";

const EditProf = () => {
  const [profileImage, setProfileImage] = useState("6.png");

  const handlePhoneNumberChange = (event) => {
    const input = event.target.value;
    const onlyNumbers = input.replace(/\D/g, "");
    event.target.value = onlyNumbers;
  };

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

  const goBack = () => {
    window.history.back(); // بازگشت به صفحه قبلی
  };

  return (
    <div className="Reset-body">
      <div className="Reset-container row">
        <div className="Reset-forms col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="Reset-form-content">
            <div className="login-form">
              {/* دکمه برگشت */}
              <button onClick={goBack} className="back-button">
                <i className="fa fa-arrow-left"></i> {/* آیکن برگشت */}
              </button>

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
                    <input
                      type="tel"
                      maxlength="11"
                      pattern="[0-9]*"
                      placeholder=" PhoneNumber :"
                      required
                      onChange={handlePhoneNumberChange}
                    />
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
