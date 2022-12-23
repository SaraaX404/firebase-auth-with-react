import { useState } from "react";
import "./App.css";
import { auth } from "./firebase-config";
import Login from "./login";

function App() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const register = async () => {
        auth
            .createUserWithEmailAndPassword(registerEmail, registerPassword)
            .then((userCredential) => {
                // send verification mail.
                userCredential.user.sendEmailVerification();
                alert("Email sent");
            })
            .catch(alert);
    };

    const login = async () => {
        try {
            const user = await auth.signInWithEmailAndPassword(loginEmail, loginPassword);
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="App">
            <header className="header">
                <div className="header-animation"></div>
                <h1>Firebase Authentication System by Saraa X</h1>
            </header>
            <div className="form-container">
                <h3 className="form-title">Register User</h3>
                <input
                    className="form-input"
                    placeholder="Email..."
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}
                />
                <input
                    className="form-input"
                    placeholder="Password..."
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}
                />

                <button className="form-button" onClick={register}>
                    Create User
                </button>
            </div>

            <div className="form-container">
                <h3 className="form-title">Login</h3>
                <input
                    className="form-input"
                    placeholder="Email..."
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                />
                <input
                    className="form-input"
                    placeholder="Password..."
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                />

                <button className="form-button" onClick={login}>
                    Login
                </button>
                <Login />
            </div>
        </div>
    );
}

export default App;