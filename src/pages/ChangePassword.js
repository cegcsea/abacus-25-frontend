import React, { useState } from "react";
import { UserData } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
const ChangePassword = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  const { changePassword } = UserData();
  const [formData, setFormData] = useState({
    newPassword: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState([]);
  const navigate = useNavigate();

  const togglePasswordVisibility = (btn) => {
    if (btn === 1) setShowPassword1((prevState) => !prevState);
    if (btn === 2) setShowPassword2((prevState) => !prevState);
    if (btn === 3) setShowPassword3((prevState) => !prevState);
  };

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) errors.push("Must be at least 8 characters long.");
    if (!/\d/.test(password)) errors.push("Must include at least one digit.");

    setPasswordError(errors);
    return errors.length === 0;
  };

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    if (name === "newPassword") {
      validatePassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validatePassword(formData.password) &&
      formData.newPassword === formData.confirmPassword &&
      formData.password !== formData.newPassword
    ) {
      changePassword(formData.password, formData.newPassword, navigate);
    } else if (formData.password === formData.newPassword) {
      toast.error("The current password and new password should be different");
    } else if (formData.newPassword !== formData.confirmPassword) {
      toast.error("The new password and confirm password fields should match");
    }
  };
  const { isLoading } = LoaderData();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Reset Password</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="password-field">
            <input
              type={showPassword1 ? "text" : "password"}
              name="password"
              placeholder="Enter your current Password"
              className="login-input"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            <span
              className={`fa fa-fw ${
                showPassword1 ? "fa-eye" : "fa-eye-slash"
              } field-icon toggle-password`}
              onClick={() => togglePasswordVisibility(1)}
            ></span>
          </div>
          <div className="password-field">
            <input
              type={showPassword2 ? "text" : "password"}
              name="newPassword"
              placeholder="Enter your new Password"
              className="login-input"
              value={formData.newPassword}
              onChange={(e) => handleChange("newPassword", e.target.value)}
            />
            <span
              className={`fa fa-fw ${
                showPassword2 ? "fa-eye" : "fa-eye-slash"
              } field-icon toggle-password`}
              onClick={() => togglePasswordVisibility(2)}
            ></span>
          </div>
          <div className="password-field">
            <input
              type={showPassword3 ? "text" : "password"}
              name="confirmPassword"
              placeholder="Re-enter new Password"
              className="login-input"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
            />
            <span
              className={`fa fa-fw ${
                showPassword3 ? "fa-eye" : "fa-eye-slash"
              } field-icon toggle-password`}
              onClick={() => togglePasswordVisibility(3)}
            ></span>
          </div>

          <div className="password-error">
            {passwordError.map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
          </div>

          <button type="submit" className="login-button">
            change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
