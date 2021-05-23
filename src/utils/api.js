import instance from '../source/mock';

const headers = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
    } 
}


async function auth ({username, password}) {
   const response = await instance.post('/token', { username, password }, {headers: {'Content-Type': 'application/json'}});
   return response.data;  
}

async function getCitiesList() {
    const response = await instance.get('/cities', headers);
    return response.data;
}

async function getUserProfile() {
    const response = await instance.get('/profile', headers);
    return response.data;
}

async function getMainPage() {
    const response = await instance.get('/main', headers);
    return response.data;
}

async function getEvents() {
    const response = await instance.get('/afisha/events', headers);
    return response.data;
}

async function takePartInEvent(event) {
    const response = await instance.post('/afisha/event-participants/', event, headers)
    return response.data;
}

export default {
    auth,
    getCitiesList,
    getUserProfile,
    getMainPage,
    getEvents,
    takePartInEvent
};