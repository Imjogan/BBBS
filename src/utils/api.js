import instance from '../source/mock';

function checkResponse(res) {
  if (res.ok) {
    return res;
  }
  return Promise.reject(new Error(`Ошибка: ${res.status}`))
}

const headers = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
    } 
}


function auth ({username, password}) {
   instance.post('/token', { username, password }, {headers: {'Content-Type': 'application/json'}})
   .then((res)=>{
    checkResponse(res)
   })
}

function getCitiesList() {
    instance.get('/cities', headers)
    .then((res)=>{
      checkResponse(res)
     })
}

function getUserProfile() {
   instance.get('/profile', headers)
   .then((res)=>{
    checkResponse(res)
   })
}

function getMainPage() {
    instance.get('/main', headers)
    .then((res)=>{
      checkResponse(res)
     })
}

function getEvents() {
    instance.get('/afisha/events', headers)
    .then((res)=>{
      checkResponse(res)
     })
}

function takePartInEvent(event) {
   instance.post('/afisha/event-participants/', event, headers)
   .then((res)=>{
    checkResponse(res)
   })
}

export default {
    auth,
    getCitiesList,
    getUserProfile,
    getMainPage,
    getEvents,
    takePartInEvent
};