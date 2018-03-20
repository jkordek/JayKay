import axios from 'axios';

class APIClient {
  constructor(){
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:3000',
      auth: {
        username: 'pisop@pisop.pl',
        password: 'a'
      },
    });
  }

  postArticle(title, content, author, place) {
    return this.axiosInstance.post('/news', {
      title, content, author, place
    });
  }

  getArticles() {
    return axios.get(`/news`);
  }

  postPlaces(city, manager, salesman, administrator) {
    return this.axiosInstance.post('/places', {
      city, manager, salesman, administrator
    });
  }

  getPlaces() {
    return axios.get(`/places`);
  }
}

export default new APIClient();
