import axios from 'axios';

const API_BASE_URL = 'https://localhost:7294/api';

const QueCherzService = {
  getAllQueCherzVs: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/quecherzv`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getQueCherzVById: async (queCherzVId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/quecherzv/${queCherzVId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addQueCherzV: async (queCherzVData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/quecherzv`, queCherzVData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateQueCherzV: async (updatedQueCherzV) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/quecherzv`, updatedQueCherzV);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteQueCherzV: async (queCherzVId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/quecherzv/${queCherzVId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default QueCherzService;
