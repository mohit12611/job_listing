import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../axios';
import './SignUp.css';

function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const history = useHistory();

    let data = {
        role,
        email,
        password
    }

    let handleSubmit = async (e) => {
        e.preventDefault();

        let registrationResData = await registerUser(data);

        history.push("/signin");
    };

    return (
        <div className='signup__form'>
            <div className="heading">
                <span>Sign Up Form</span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="email__div">
                    <label for="email" className="email__lable">Email :</label>
                    <div className=" email">
                        <input type="text" className="form-control" id="email" placeholder="Email" value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                    </div>
                </div>
                <div className="password__div">
                    <label for="inputPassword" className="password__label">Password : </label>
                    <div className=" password">
                        <input type="password" className="form-control" id="password" placeholder="Password" value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                    </div>
                </div>
                {/* <div className="adminpin__div">
                    <label for="adminPin" className="adminPin__label">Pin : </label>
                    <div className=" admin__pin">
                        <input type="password" className="form-control" id="adminPin" placeholder="Enter PIN to register as ADMIN else Leave blank" value={admin_pin}
                            onChange={(e) => {
                                setAdminPin(e.target.value);
                            }} />
                    </div>

                    
                </div> */}

                <div className='role__div'>
                    <label for="role" className="role__label">Role : </label>
                    <div className="role">
                        <select style={{width:"70%"}}id="role" name="role" value={role} onChange={(e) => {
                            setRole(e.target.options[e.target.selectedIndex].value)
                        }}>
                            <option value="candidate">Candidate</option>
                            <option value="recruiter">Recruiter</option>
                        </select>
                    </div>
                </div>

                <div className="form__button">
                    <button type="submit" className="btn"> Submit </button>
                </div>
            </form>
        </div>
    )
}

export default SignUp


