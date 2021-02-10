import React from "react";

function SignOut({ auth,setLoading }) {
	const logoutHandler = () => {
		setLoading(false);
		auth.signOut()
	}

  return (
    auth.currentUser && (
      <div className="signInDiv2">
        <button className="signoutbutton" onClick={logoutHandler}>
          Sign Out
        </button>
      </div>
    )
  );
}
export default SignOut;
