import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { GoogleLogin } from 'react-google-login';

const clientiD =    'Put Your Google Api ID Here';


function Login(){
    const onSucess = (res) => {
        console.log(
            '[Login Success] currentUser:', res.profileObj
         )};

         const onFailure = (res) => {
             console.log('[Login failed] res:', res);

         };

         return (
             <div>
            <GoogleLogin
            clientId={clientiD}
            buttonText="Login"
            onSuccess={onSucess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
          />

          </div>
         )


}
