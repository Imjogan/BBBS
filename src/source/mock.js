import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  postTokenRes,
  getCityListRes,
  getUserInfoRes,
  getMainPageRes,
  getEventRes,
  postEventRes,
} from '../utils/mockResponses';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
})

const headers = {'Content-Type': 'application/json'};

const mock = new MockAdapter(instance);

mock.onPost('/token').reply(200, postTokenRes, headers);
mock.onGet('/cities').reply(200, getCityListRes, headers);
mock.onGet('/profile').reply(200, getUserInfoRes, headers);
mock.onGet('/main').reply(200, getMainPageRes, headers);
mock.onGet('/afisha/events').reply(200, getEventRes, headers);
mock.onPost('/afisha/event-participants/').reply(200, postEventRes, headers);
mock.onPatch('/profile').reply(200, getUserInfoRes, headers);


export default instance;

