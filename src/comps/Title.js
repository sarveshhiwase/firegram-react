import React from "react";
import SignOut from './signOut'
import logo from "../firegram-logo.png";

const Title = ({auth}) => {
  return (
    <div className="title">
    	<div className="flex">
    	<img className="icon" src={logo} alt="" />
      	<SignOut auth={auth}/>
    	</div>
    	<div className="flex-center">
    	<img className="profile-icon" src={auth.currentUser.photoURL} alt={auth.currentUser.displayName}/>

    	</div>
      <h2>Welcome {auth.currentUser.displayName}</h2>
      <h2>Share Your Memories</h2>
      <p>Store images and view them with subtle animations.</p>
    </div>
  );
};

export default Title;
