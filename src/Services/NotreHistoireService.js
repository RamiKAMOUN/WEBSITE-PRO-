import axios from 'axios';

const API_BASE_URL = 'https://localhost:7294/api'; 

const NotreHistoireService = {
  getAllNotreHistoires: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/notreHistoire`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getNotreHistoireById: async (notreHistoireId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/notreHistoire/${notreHistoireId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addNotreHistoire: async (notreHistoireData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/notreHistoire`, notreHistoireData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateNotreHistoire: async (updatedNotreHistoire) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/notreHistoire`, updatedNotreHistoire);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteNotreHistoire: async (notreHistoireId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/notreHistoire/${notreHistoireId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default NotreHistoireService;
