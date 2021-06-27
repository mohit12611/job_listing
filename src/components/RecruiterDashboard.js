import React, { useState, useEffect } from 'react';
import { checkToken, createJob, getCandidates } from '../axios';
import axios from 'axios';

function RecruiterDashboard() {

    const [userData, setUserData] = useState([]);
    const [jobData, setJobData] = useState({
        designation: "",
        skills: "",
        experience: "",
        discription: "",
    });

    useEffect(async () => {
        let { data } = await checkToken();
        console.log(data);
        setTimeout(() => {
            setUserData( {...data});
        },500);
        console.log(userData);
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        let { data } = await createJob({ ...jobData, _id: userData.data._id });

        clear();
    }

    const clear = () => {
        setJobData({
            designation: "",
            skills: "",
            experience: "",
            discription: "",
        });
    }

    return  (
        <div className="container">
            <div className="row">
                <div className="col-8 border border-dark rounded">

                    {
                        !userData.length ? <h3> Loading ...</h3> :
                            userData.data.candidates.map((candidate) => {
                                return (
                                    <div className="candidates">
                                        <p>Candidate Email -  {candidate.email}</p>
                                        <p>Job Candidate applied for -  {candidate.designation}</p>
                                        <p>Experience required - {candidate.experience}</p>
                                        <p>Skills required - {candidate.skills.map((skill) => `#${skill}   ,`)}</p>
                                    </div>
                                )
                            })

                    }

                </div>
                <div className="col-4 border border-dark rounded">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Designation</label>
                            <input type="text" class="form-control" id="designation" placeholder="name@example.com" value={jobData.designation} onChange={(e) => { setJobData({ ...jobData, designation: e.target.value }) }} />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Minimum Experience</label>
                            <input type="text" class="form-control" id="minimum_experience" placeholder="Minimum Experience" value={jobData.experience} onChange={(e) => { setJobData({ ...jobData, experience: e.target.value }) }} />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Skills Required</label>
                            <input type="text" class="form-control" id="skills-required" placeholder="Skills Required" value={jobData.skills} onChange={(e) => { setJobData({ ...jobData, skills: e.target.value.split(",") }) }} />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Job Discription</label>
                            <textarea class="form-control" id="j_d" rows="3" value={jobData.discription} onChange={(e) => { setJobData({ ...jobData, discription: e.target.value }) }}></textarea>
                        </div>
                        <button type="submit" className="btn btn-info" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default RecruiterDashboard

