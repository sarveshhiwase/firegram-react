import React from "react";
import SignOut from "./signOut";
import logo from "../firegram-logo.png";

const Title = ({ auth }) => {
  return (
    <div className="title">
      <div className="flex">
        <img className="icon" src={logo} alt="" />
        <SignOut auth={auth} />
      </div>

      <div className="flex-center">
        <img className="profile-icon" src={auth.currentUser.photoURL} alt="" />
        <h2>{auth.currentUser.displayName}</h2>

        <h4>Share Your Memories</h4>
        <p>Store images and view them with subtle animations.</p>
        <hr
          style={{
            color: "red",
            backgroundColor: "orange",
            height: "5px",
          }}
        />
      </div>
    </div>
  );
};

export default Title;
