import axios from 'axios';
//const BASE_URL = 'http://73.109.125.191:3100';
const BASE_URL = 'http://localhost:3200';


export function login (data) {
    const lgnMsg = document.getElementById('loginMessage')
    return axios.post(`${BASE_URL}/api/login`, { 
        email: data.email, 
        password: data.password 
    })
    .then(response => {
        localStorage.setItem('x-access-token', response.data.token);
        localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000);
        return response.data
    })
    .catch((err) => Promise.reject(
        lgnMsg.innerHTML = err.response.data
    ));
}

export function register (data) {
    const regMsg = document.getElementById('registrationMessage')
    return axios.post(`${BASE_URL}/api/register`, {
        fname: data.fname, 
        lname: data.lname, 
        email: data.email, 
        password: data.password
    })
    .then((res) => {
        regMsg.innerHTML = res.data
    })
    .catch((err) => {
        regMsg.innerHTML = err.response.data
    })
}


export function isAuthenticated() {
    return localStorage.getItem('x-access-token') 
    && localStorage.getItem('x-access-token-expiration') > Date.now()
}

export function getUserInfo() {
    return axios.get(`${BASE_URL}/user/data`, { 
        params: { 'x-access-token': localStorage.getItem('x-access-token')} 
       })
       .then(res => res.data)
       .catch(err => Promise.reject('Request Not Authenticated!'));
    }