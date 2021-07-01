import axios from 'axios';

const API_KEY = '21677950-a4a5f84606af054d030ec0d2d';
axios.defaults.baseURL = 'https://pixabay.com/api';

export default class PixabayApi {
  constructor() {
    this.api_key = API_KEY;
    this.searchQuery = '';
    this.page = 1;
  }
  /**
   * Функция для поиска картинок
   * @param {string} query - Название картинки (необьязательный параметр)
   * @return  массив объектов из 12 картинок
   */
  async fetchPicture(query = this.searchQuery) {
    if (!query) {
      console.log('PixabayApi: searchQuery === null');
    }
    if (query !== this.searchQuery) {
      this.searchQuery = query;
    }

    const response = await axios.get(
      `?q=${query}&page=${this.page}&key=${this.api_key}&per_page=12&image_type=photo&orientation=horizontal`,
    );
    return response.data.hits;
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(q) {
    this.searchQuery = q;
  }
}
// const imgFinder = new PixabayApi();
// imgFinder.query = 'cat';
// imgFinder.fetchPicture().then(console.log);
