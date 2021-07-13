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

  auth(username, password) {
    return fetch(`${this.baseUrl}/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => this.checkResponse(res));
  }

  getUserProfile(jwt) {
    return fetch(`${this.baseUrl}/profile/`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then((res) => this.checkResponse(res));
  }

  // возвращает место для BigPlace
  getPlace(city) {
    return fetch(`${this.baseUrl}/place/?city=${city}`).then(
      this.checkResponse
    );
  }

  // возвращает места для города
  getPlaces(city) {
    return fetch(`${this.baseUrl}/places/?city=${city}&limit=3`).then(
      this.checkResponse
    );
  }

  // возвращает теги для фильтра
  getTags(pathname) {
    return fetch(`${this.baseUrl}${pathname}/tags/`).then(this.checkResponse);
  }

  // возвращает места для города с параметрами фильтров
  // eslint-disable-next-line class-methods-use-this
  getPlacesWithParams(city, filterList) {
    const paramStr = "&tags__slug=";
    const paramStrList = filterList.reduce(
      (acc, filter) => acc + paramStr + filter,
      ""
    );
    return fetch(
      `${this.baseUrl}/places/?city=${city}&limit=3${paramStrList}`
    ).then(this.checkResponse);
  }

  getPagination(pageLink) {
    return fetch(`${pageLink}`).then(this.checkResponse);
  }

  getQuestions() {
    return fetch(`${this.baseUrl}/questions/`).then(this.checkResponse);
  }

  // возвращает вопросы с параметрами фильтров
  // eslint-disable-next-line class-methods-use-this
  getQuestionsWithParams(filterList) {
    const paramStr = "&tags__slug=";
    const paramStrList = filterList.reduce((acc, filter) => {
      return acc + paramStr + filter;
    }, "");
    return fetch(`${this.baseUrl}/questions/?${paramStrList}`).then(
      this.checkResponse
    );
  }

  getRights() {
    return fetch(`${this.baseUrl}/rights/`).then(this.checkResponse);
  }

  // возвращает вопросы с параметрами фильтров
  // eslint-disable-next-line class-methods-use-this
  getRightsWithParams(filterList) {
    const paramStr = "&tags__slug=";
    const paramStrList = filterList.reduce((acc, filter) => {
      return acc + paramStr + filter;
    }, "");
    return fetch(`${this.baseUrl}/rights/?${paramStrList}`).then(
      this.checkResponse
    );
  }

  getRight(id) {
    return fetch(`${this.baseUrl}/right/${id}`).then(this.checkResponse);
  }
}

const apiServer = new ApiServer();
export default apiServer;
