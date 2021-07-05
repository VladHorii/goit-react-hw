import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class MovieService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.id = '';
    this.key = '0558fb418099b1d6ef291e53504aa0aa';
  }

  async fetchMovies() {
    try {
      const response = await axios.get(
        `/trending/movie/day?api_key=${this.key}&page=${this.page}`,
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async fetchGenre() {
    try {
      const response = await axios.get(
        `/genre/movie/list?api_key=${this.key}&language=en-US`,
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async fetchMovieInfo() {
    try {
      const response = await axios.get(
        `/movie/${this.id}?api_key=${this.key}&language=en-US`,
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async fetchMoviesWithQuery() {
    try {
      const response = await axios.get(
        `/search/movie/?api_key=${this.key}&query=${this.searchQuery}&page=${this.page}&language=en-US`,
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  nextPage() {
    this.page += 1;
  }

  previousPage() {
    this.page -= 1;
  }
  resetPage() {
    this.page = 1;
  }

  setPage(page) {
    this.page = page;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
