import React from 'react';
import {auth , gProvider, fProvider}  from './firebase-config.js';

const Login = () => {

    const gSignin = () => {
        auth.signInWithPopup(gProvider).catch(alert);
    }

    const fSignIn = () =>{
        auth.signInWithPopup(fProvider).catch(alert)
    }

    return (
        <div>
            <center>
                <button className="button" style={{ margin: "10px" }} onClick={gSignin}>
                    Sign In with Google
                </button>
            </center>
            <center>
                <button className="button red" style={{ margin: "10px" }}  onClick={fSignIn}>
                    Sign In with Facebook
                </button>
            </center>
        </div>
    );
}

export default Login;