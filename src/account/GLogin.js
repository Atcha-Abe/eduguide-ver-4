import React from 'react';
import { useGoogleLogin } from 'react-google-login';


// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '921182133637-oottoaa9p4oej5p423r33rrsnrskne7m.apps.googleusercontent.com';

function GLogin() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully! Welcome ${res.profileObj.name}. \nYou can know take the test.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please contact the developers`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  

  return (
    <button onClick={signIn} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>
      <span className="buttonText">Sign in with Google</span>
    </button>
  );

  

}

export default GLogin;