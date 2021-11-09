import React from "react";
import { useGoogleLogout } from "react-google-login";

const clientId =
  "921182133637-oottoaa9p4oej5p423r33rrsnrskne7m.apps.googleusercontent.com";

function GLogout() {
  const onLogoutSuccess = (res) => {
    console.log("Logged out Success");
    alert("Logged out Successfully ✌");
  };

  const onFailure = () => {
    console.log("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <span className="buttonText" onClick={signOut}>
      Sign out
    </span>
  );
}

export default GLogout;
