import { CITIES_API_URL } from "./config";

class CitiesApi {
  constructor({ CITIES_API_URL, headers }) {
    this.CITIES_API_URL = CITIES_API_URL;
    // this._headers = headers;
  }

  _getResData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }


  getCities() {
    return fetch(`${this.CITIES_API_URL}`, {
      
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      //headers: this._headers,
    }).then(this._getResData);
  }

}


const citiesApi = new CitiesApi({
  CITIES_API_URL,

});

export default citiesApi;
