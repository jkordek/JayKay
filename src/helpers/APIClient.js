import _ from 'lodash';
import axios from 'axios';

class APIClient {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:3000',
    });
    this.config = {};
  }

  setUserCredentials(username, password) {
    this.config.auth = { username, password };
  }

  getNews(author) {
    const params = { author };
    return this._get('/news', { params });
  }

  getOneNews(id) {
    return this._get(`/news/${id}`);
  }

  createNews(title, author, content) {
    const data = { title, author, content };
    return this._post('/news', data);
  }

  updateNews(id, title, author, content) {
    const data = { title, author, content };
    return this._put(`/news/${id}`, data);
  }

  deleteNews(id) {
    return this._delete(`/news/${id}`);
  }

  getPlaces(manager, salesman, administrator) {
    const params = {
      manager, salesman, administrator,
    };
    return this._get('/places', { params });
  }

  getPlace(id) {
    return this._get(`/places/${id}`);
  }

  createPlace(name, street, buildingNumber, postCode, city, manager, salesman, administrator) {
    const data = {
      name, street, buildingNumber, postCode, city, manager, salesman, administrator,
    };

    return this._post('/places', data);
  }

  updatePlace(id, name, street, buildingNumber, postCode, city, manager, salesman, administrator) {
    const data = {
      name, street, buildingNumber, postCode, city, manager, salesman, administrator,
    };

    return this._put(`/places/${id}`, data);
  }

  deletePlace(id) {
    return this._delete(`/places/${id}`);
  }

  _request(method, path, config) {
    const finalConfig = _.merge(this.config, config);
    if (finalConfig.data) finalConfig.data = _.compact(finalConfig.data);
    if (finalConfig.params) finalConfig.params = _.compact(finalConfig.params);
    finalConfig.url = path;
    finalConfig.method = method;

    return this.axiosInstance.request(finalConfig)
      .then(this._handleResponse(finalConfig))
      .catch(this._handleError.bind(this));
  }

  _get(path, config = {}) {
    return this._request('get', `${this.apiUrl}/${path}`, config);
  }

  _post(path, data, config = {}) {
    const localConfig = config;
    localConfig.data = data;

    return this._request('post', `${this.apiUrl}/${path}`, localConfig);
  }

  _put(path, data, config = {}) {
    const localConfig = config;
    localConfig.data = data;

    return this._request('put', `${this.apiUrl}/${path}`, localConfig);
  }

  _delete(path) {
    return this._request('delete', `${this.apiUrl}/${path}`);
  }
}

export default new APIClient();
