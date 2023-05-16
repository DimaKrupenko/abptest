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

  async getVehicleVeriablesList() {
    const url = `${this.BASE_URL}vehicles/getvehiclevariablelist?format=json`;
    const response = await axios.get(url);
    return response.data.Results;
  },
};
