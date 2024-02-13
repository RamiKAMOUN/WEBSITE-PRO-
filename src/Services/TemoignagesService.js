import axios from 'axios';

const API_BASE_URL = 'https://localhost:7294/api';

const TemoignageService = {
  getAllTemoignages: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/temoignage`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getTemoignageById: async (temoignageId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/temoignage/${temoignageId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addTemoignage: async (temoignageData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/temoignage/add-temoignage-with-image`, temoignageData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateTemoignage: async (updatedTemoignage) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/temoignage`, updatedTemoignage);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteTemoignage: async (temoignageId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/temoignage/${temoignageId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default TemoignageService;
