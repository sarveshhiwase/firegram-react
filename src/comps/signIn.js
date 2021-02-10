import React from "react";
import logo from "../firegram.png";
import search from "../search.svg";

const signIn = ({ auth, provider,setLoading }) => {
  const signInWithGoogle = () => {
    setLoading(true);
    auth.signInWithPopup(provider);
  };

  return (
    
    <div className="signInDiv">
      <img className="home-icon" src={logo} alt="home-icon" />
      <h1 className="sharemem">Share Your <span className="sad">Memories</span></h1>
      <button className="signinbutton" onClick={signInWithGoogle}>
        <span>
          <img
            className="google-icon"
            src={search}
            alt=""
          />
        </span>
        <span>Sign In with Google</span>
      </button>
      <h2 style={{color: 'white', marginTop: '30px'}}>Store images and view them with subtle animations.</h2>
    </div>

  );
};

export default signIn;