import React from 'react';
import logo from "../firegram-logo.png";

const signIn = ({auth,provider}) => {
	const signInWithGoogle = () => {
	    auth.signInWithPopup(provider);
	  }

  return (
<>
 	
<div className="signInDiv">
<img className="home-icon" src={logo} alt="" />

<a onClick={signInWithGoogle}>
    <p><span className="bg"></span><span className="base"></span><span className="text">Sign In with Google</span></p></a></div>
 </>
  )
}

export default signIn;

