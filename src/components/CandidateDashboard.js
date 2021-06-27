import React, { useEffect, useState } from 'react'
import { getJobs, checkToken, applyJob } from '../axios';

function CandidateDashboard() {

    const [userData, setUserData] = useState([]);
    const [jobs, setJobs] = useState([]);

    const tokenCheck = async () => {
        let { data } = await checkToken();
        console.log("userdata", data)
        setUserData(data);
    }

    useEffect(() => {
        tokenCheck();
        (async () => {
            let { data } = await getJobs();
            console.log("jobs", data);
            setJobs(data);
        })();
    }, [])


    return (
        !jobs.length ? <h2>Loading...</h2> : <div className="container-lg">
            <div className="row">
                {jobs.map(({ job }) => {
                    console.log(job)
                    return (

                        <div className="col-3">
                            <div class="card" style={{ width: "18rem" }}>
                                <div class="card-body">
                                    <h5 class="card-title">Designation - {job.designation}</h5>
                                    <p class="card-text">Discription - {job.discription}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><h4>Skills -</h4>{job.skills.map((skill) => `#${skill}   ,`)}</li>
                                    <li class="list-group-item"><h4>Experience -</h4>{job.experience} years</li>
                                </ul>
                                <div class="card-body">
                                    <button onClick={ async (e) => {

                                        const dataToSend = {
                                            email: userData.email,
                                            discription: job.discription,
                                            designation: job.designation,
                                            skills: job.skills,
                                            experience: job.experience,
                                            recruiter_id: job._id,
                                        }

                                        await applyJob(userData._id, dataToSend);
                                        e.target.disable = true;
                                    }} className="btn btn-primary">Apply</button>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div >

    )
}

export default CandidateDashboard;
