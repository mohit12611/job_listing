import React, { useState , useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './SignIn.css';
import { loginUser } from '../axios';

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    let userData = {
        "email": email,
        "password": password,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let { data } = await loginUser(userData);
        console.log("data.role------------",data.role);
        setPassword("");
        setEmail("");

        window.localStorage.setItem("app_token", data.token);

        data.role === "recruiter" ? history.push("/recruiter-dashboard") :  history.push("candidate-dashboard");
        
    }


    return (
        <div className="login__form">
            <div className="heading">
                <span>Sign In Form</span>
            </div>
            <form onSubmit={handleSubmit}>
                <div class="email__div">
                    <label for="email" class="email__lable">Email :</label>
                    <div class=" email">
                        <input type="text" class="form-control" id="email" placeholder="Email" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                    </div>
                </div>
                <div class="password__div">
                    <label for="inputPassword" class="password__label">Password : </label>
                    <div class=" password">
                        <input type="password" class="form-control" id="password" placeholder="Password" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                    </div>
                </div>
                <div className="form__button">
                    <button type="submit" className="btn" > Submit </button>
                </div>
            </form>
        </div>
    )
}

export default SignIn

