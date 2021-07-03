class ApiServer {
  constructor() {
    this.baseUrl = "http://84.252.134.34:7000/api/v1";
  }

  // eslint-disable-next-line class-methods-use-this
  checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // возвращает место для BigPlace
  getPlace(city) {
    return fetch(`${this.baseUrl}/place/?city=${city}`).then(
      this.checkResponse
    );
  }

  // возвращает места для города
  getPlaces(city) {
    return fetch(`${this.baseUrl}/places/?city=${city}`).then(
      this.checkResponse
    );
  }
}

const apiServer = new ApiServer();
export default apiServer;
