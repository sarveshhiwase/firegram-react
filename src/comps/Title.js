import React from "react";
import logo from "../firegram-logo.png";

const Title = () => {
  return (
    <div className="title">
      <img className="icon" src={logo} alt="" />

      <h2>Share Your Memories</h2>
      <p>Store images and view them with subtle animations.</p>
    </div>
  );
};

export default Title;
