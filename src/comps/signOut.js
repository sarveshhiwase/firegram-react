import React from 'react'

function SignOut({auth}) {
  return auth.currentUser && (
   	<div className="signInDiv2"><a href="firegram" className="transparent" onClick={() => auth.signOut()}>
    <p><span className="bg"></span><span className="base"></span><span className="text">Sign Out</span></p></a></div>
  
  )
}
export default SignOut;
