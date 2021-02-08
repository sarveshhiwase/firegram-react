import React from "react";

function SignOut({ auth }) {
  return (
    auth.currentUser && (
      <div className="signInDiv2">
        <button className="signoutbutton" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      </div>
    )
  );
}
export default SignOut;
