import React, { useRef } from "react";
import "../../styles/scss/UserLogin.scss";

import { AiOutlineUser, AiOutlineCloseCircle } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { Facebook } from "@mui/icons-material";

const UserLogin = () => {
  const mainFormRef = useRef();
  const blurEffectRef = useRef();

  const addUserForm = () => {
    if (
      mainFormRef.current.classList.contains("main-container-user") ||
      mainFormRef.current.classList.contains("translate-x-full") ||
      blurEffectRef.current.classList.contains("blur-background")
    ) {
      mainFormRef.current.classList.add("display-adduser-form");
      mainFormRef.current.classList.add("translate-x-0");
      blurEffectRef.current.classList.add("blur-effect-add");

      mainFormRef.current.classList.remove("hidden-adduser-form");
      mainFormRef.current.classList.remove("translate-x-full");
      blurEffectRef.current.classList.remove("blur-effect-remove");
    } else {
      mainFormRef.current.classList.add("hidden-adduser-form");
      mainFormRef.current.classList.add("translate-x-full");
      blurEffectRef.current.classList.add("blur-effect-remove");

      mainFormRef.current.classList.remove("display-adduser-form");
      mainFormRef.current.classList.remove("translate-x-0");
      blurEffectRef.current.classList.remove("blur-effect-add");
    }
  };

  const deleteUserForm = () => {
    if (
      mainFormRef.current.classList.contains("main-container-user") ||
      mainFormRef.current.classList.contains("translate-x-full") ||
      blurEffectRef.current.classList.contains("blur-background")
    ) {
      mainFormRef.current.classList.add("hidden-adduser-form");
      mainFormRef.current.classList.add("translate-x-0");
      blurEffectRef.current.classList.add("blur-effect-remove");

      mainFormRef.current.classList.remove("translate-x-full");
      mainFormRef.current.classList.remove("display-adduser-form");
      blurEffectRef.current.classList.remove("blur-effect-add");
    } else {
      mainFormRef.current.classList.remove("hidden-adduser-form");
      mainFormRef.current.classList.remove("translate-x-0");
      blurEffectRef.current.classList.remove("blur-effect-add");

      mainFormRef.current.classList.add("display-adduser-form");
      mainFormRef.current.classList.add("translate-x-full");
      blurEffectRef.current.classList.add("blur-effect-remove");
    }
  };

  const handleRemoveBlurEffect = () => {
    if (
      mainFormRef.current.classList.contains("main-container-user") ||
      mainFormRef.current.classList.contains("translate-x-full") ||
      blurEffectRef.current.classList.contains("blur-background")
    ) {
      mainFormRef.current.classList.add("translate-x-full");
      mainFormRef.current.classList.add("hidden-adduser-form");
      blurEffectRef.current.classList.add("blur-effect-remove");

      blurEffectRef.current.classList.remove("blur-effect-add");
      mainFormRef.current.classList.remove("translate-x-full");
      mainFormRef.current.classList.remove("display-adduser-form");
    } else {
      blurEffectRef.current.classList.add("blur-effect-add");
      mainFormRef.current.classList.add("translate-x-0");
      mainFormRef.current.classList.add("display-adduser-form");

      blurEffectRef.current.classList.remove("blur-effect-remove");
      mainFormRef.current.classList.remove("translate-x-full");
      mainFormRef.current.classList.remove("hidden-adduser-form");
    }
  };

  return (
    <>
      <div
        onBlur={deleteUserForm}
        onClick={addUserForm}
        className="relative left-4 "
      >
        <AiOutlineUser className="user-custom-btn" />
      </div>

      <div
        onClick={handleRemoveBlurEffect}
        ref={blurEffectRef}
        className="blur-background"
      ></div>

      <div
        ref={mainFormRef}
        className="main-container-user translate-x-full overflow-y-scroll"
      >
        <div className="flex top-bar-style">
          <h3>Sign In</h3>
          <AiOutlineCloseCircle
            className="close-btn"
            onClick={deleteUserForm}
          />
        </div>
        <hr />
        <form
          className="user-form-style flex flex-col items-center"
          action="#"
          method="post"
        >
          <label htmlFor="email">
            Username or email <span className="text-red-600">*</span>
          </label>
          <input
            className="search-input-custom p-2 border-2"
            type="text"
            name="email"
            id="email"
          />
          <label className="pt-4" htmlFor="password">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            className="search-input-custom p-2 border-2"
            type="text"
            id="password"
            name="password"
          />
          <button className="button-submit-custom p-2 border-2" type="submit">
            Login
          </button>
          <div className="flex justify-center items-center my-4">
            <span className="horizontal-line" />
            <h5 className="login-with-custom">OR LOGIN WITH</h5>
            <span className="horizontal-line" />
          </div>

          <button
            className="flex justify-center button-facebook-custom p-2 border-2"
            type="submit"
          >
            <Facebook className="facebook-icon" />
            <h3>FACEBOOK</h3>
          </button>
          <button
            className="flex justify-center  button-google-custom p-2 border-2"
            type="submit"
          >
            <img
              className="w-5 inline google-icon"
              src="./google-color-icon.png"
              alt=""
            />

            <h3>GOOGLE</h3>
          </button>
        </form>

        {/* Register Account */}
        <div className="flex flex-col items-center mb-8">
          <span className="horizontal-rule" />
          <FaUserAlt className="register-user-style" />
          <h3 className="register-heading">No account yet?</h3>
          <a href="/my-account" className="create-account-style">
            CREATE AN ACCOUNT
          </a>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
