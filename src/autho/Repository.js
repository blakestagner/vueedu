import axios from 'axios';
const BASE_URL = 'https://api.vueedu.com';
//const BASE_URL = 'http://localhost:3101';


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
export function postPlanner(data) {
    return axios.post(`${BASE_URL}/post/planner`, {
            'x-access-token': localStorage.getItem('x-access-token'),
            'title': data.title,
            'content': data.content,
            'hashtag': data.hashtag,
            'reminder': data.checked,
            'reminder_time': data.reminder_time,
            'type': data.type,} 
        )
        .then(res => res.data)
        .catch(err => Promise.reject('Request Not Authenticated!'));
    }
export function getPlanner() {
    return axios.get(`${BASE_URL}/api/getPlanner`, {
        params: { 'x-access-token': localStorage.getItem('x-access-token')} 
    })
    .then(res => res.data)
    .catch(err => Promise.reject('Request Not Authenticated!'));
    }
export function updateReminder(data) {
    return axios.post(`${BASE_URL}/api/plannerReminder`, {
        'x-access-token': localStorage.getItem('x-access-token'),
        'reminder': data.checked,
        'id': data.toggleid
    })
    .then(res => res.data)
    .catch(err => Promise.reject('Request Not Authenticated!'));
    }
//Notes
export function postNote(data) {
    return axios.post(`${BASE_URL}/post/Notes`, {
            'x-access-token': localStorage.getItem('x-access-token'),
            'title': data.title,
            'content': data.content,
            'hashtag': data.hashtag,
            'reminder': data.checked,
            'reminder_time': data.reminder_time,
            'type': data.type,
            'color': data.color} 
        )
        .then(res => res.data)
        .catch(err => Promise.reject('Request Not Authenticated!'));
    }
export function getNotes() {
    return axios.get(`${BASE_URL}/api/getNotes`, {
        params: { 'x-access-token': localStorage.getItem('x-access-token')} 
    })
    .then(res => res.data)
    .catch(err => Promise.reject('Request Not Authenticated!'));
    }
export function updateNotesReminder(data) {
    return axios.post(`${BASE_URL}/api/notesReminder`, {
        'x-access-token': localStorage.getItem('x-access-token'),
        'reminder': data.checked,
        'id': data.toggleid
    })
    .then(res => res.data)
    .catch(err => Promise.reject('Request Not Authenticated!'));
    }
export function updateNotesReminder2(data) {
    return axios.post(`${BASE_URL}/api/notesReminder`, {
        'x-access-token': localStorage.getItem('x-access-token'),
        'reminder': data.reminderStatus,
        'id': data.notificationid
    })
    .then(res => res.data)
    .catch(err => Promise.reject('Request Not Authenticated!'));
    }
export function deleteNote(data) {
    return axios.delete(`${BASE_URL}/api/notesDelete`, {
        data: {'x-access-token': localStorage.getItem('x-access-token'), 'id': data} 
    })
    .then(res => res.data)
    .catch(err => Promise.reject('Request Not Authenticated!'));
    }
export function updateNoteColor(x, y) {
    return axios.post(`${BASE_URL}/api/updateNoteColor`, {
        'x-access-token': localStorage.getItem('x-access-token'),
        'color': x,
        'id': y
    })
    .then(res => res.data)
    .catch(err => Promise.reject('Request Not Authenticated!'));
    }
