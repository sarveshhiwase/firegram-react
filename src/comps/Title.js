import React from "react";
import SignOut from "./signOut";
import logo from "../firegram.png";

const Title = ({ auth,setLoading }) => {
  console.log(auth.currentUser)
  return (
    <div className="title">
      <div className="flex">
        <img className="icon" src={logo} alt="" />
        <SignOut setLoading={setLoading} auth={auth} />
      </div>

      <div className="flex-center">
        <img className="profile-icon" src={auth.currentUser.photoURL} alt="" />
        <h2 style={{color: 'white'}}>{auth.currentUser.displayName}</h2>

        
        
      </div>
    </div>
  );
};

export default Title;
