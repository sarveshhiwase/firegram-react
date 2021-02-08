import React from "react";
import logo from "../firegram-logo.png";
import search from "../search.svg";

const signIn = ({ auth, provider }) => {
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };

  return (
    <div className="signInDiv">
      <img className="home-icon" src={logo} alt="home-icon" />

      <button className="signinbutton" onClick={signInWithGoogle}>
        <span>
          <img
            className="google-icon"
            style={{ background: "white", padding: "5px" }}
            src={search}
            alt=""
          />
        </span>
        <span>Sign In with Google</span>
      </button>
    </div>
  );
};

export default signIn;
