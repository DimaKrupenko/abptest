import axios from 'axios';

axios.defaults.baseURL = 'https://vpic.nhtsa.dot.gov/api/';

export const API = {
  BASE_URL: 'https://vpic.nhtsa.dot.gov/api/',
  query: [],

  setQuery(query) {
    API.query = query;
  },

  resetQuery() {
    API.query = '';
  },

  async searchVin() {
    const url = `${this.BASE_URL}vehicles/decodevin/${this.query}?format=json`;
    const response = await axios.get(url);
    return response.data.Results;
  },

  //   async searchMovie() {
  //     const urlSearch = `${this.BASE_URL}${this.URL_SEARCH}?query=${this.query}&api_key=${this.API_KEY}`;
  //     const response = await axios.get(urlSearch);
  //     return response.data.results;
  //   },

  //   async getDetails() {
  //     const urlDetails = `${this.BASE_URL}movie/${this.movieId}?api_key=${this.API_KEY}`;
  //     const response = await axios.get(urlDetails);
  //     return response.data;
  //   },

  //   async getCast() {
  //     const urlCast = `${this.BASE_URL}movie/${this.movieId}/credits?api_key=${this.API_KEY}`;
  //     const response = await axios.get(urlCast);
  //     return response.data.cast;
  //   },

  //   async getRevies() {
  //     const urlReviews = `${this.BASE_URL}movie/${this.movieId}/reviews?api_key=${this.API_KEY}`;
  //     const response = await axios.get(urlReviews);
  //     return response.data.results;
  //   },
};
