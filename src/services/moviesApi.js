import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class MovieService {
  constructor() {
    this.searchQuery = '';
    this.id = '';
    this.key = '0558fb418099b1d6ef291e53504aa0aa';
  }

  async fetchMovies() {
    try {
      const response = await axios.get(
        `/trending/movie/day?api_key=${this.key}`,
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async fetchMovieInfo(id = this.id) {
    if (id !== this.id) {
      this.id = id;
    }
    try {
      const response = await axios.get(`/movie/${this.id}?api_key=${this.key}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async fetchMovieCast(id = this.id) {
    if (id !== this.id) {
      this.id = id;
    }
    try {
      const response = await axios.get(
        `/movie/${this.id}/credits?api_key=${this.key}`,
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async fetchMovieReviews(id = this.id) {
    if (id !== this.id) {
      this.id = id;
    }
    try {
      const response = await axios.get(
        `/movie/${this.id}/reviews?api_key=${this.key}`,
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async fetchMoviesWithQuery(query = this.searchQuery) {
    if (query !== this.searchQuery) {
      this.searchQuery = query;
    }

    try {
      const response = await axios.get(
        `/search/movie?api_key=${this.key}&query=${this.searchQuery}`,
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
