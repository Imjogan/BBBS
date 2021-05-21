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

const mock = new MockAdapter(axios);

mock.onPost('/api/v1/token/').reply(200, postTokenRes);
mock.onPost('/api/v1/afisha/event-participants/').reply(200, postEventRes)
mock.onGet('/api/v1/cities/').reply(200, getCityListRes);
mock.onGet('/api/v1/profile/').reply(200, getUserInfoRes);
mock.onGet('/api/v1/main/').reply(200, getMainPageRes);
mock.onGet('/api/v1/afisha/events/').reply(200, getEventRes);



export default axios;
