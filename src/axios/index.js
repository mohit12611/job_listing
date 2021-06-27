import axios from 'axios';


let localServer = "http://localhost:5000/user/";
//let herokuServer = "";

export  async function loginUser(data) {
    return await axios.post(`${localServer}login`,data);
}

export function registerUser(data) {
    return axios.post(`${localServer}register`, data);
}

export function createJob(newJob) {
    return axios.post(`${localServer}create-job`, newJob);
}

export function getJobs() {
    return axios.get(`${localServer}get-jobs`);
}

export function getCandidates(id) {
    return axios.get(`${localServer}get-candidates/:${id}`);
}

export function applyJob(id, candidateData) {
    return axios.post(`${localServer}apply-job/:${id}`, candidateData);
}

export function checkToken() {
    return axios.get(`${localServer}check-token`, {
        headers: {
            authorization: window.localStorage.getItem("app_token"),
        }
    })
}


