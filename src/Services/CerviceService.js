import axios from 'axios';

const API_BASE_URL = 'https://localhost:7294/api';

const CerviceService = {
  getAllCervices: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/cervice`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getCerviceById: async (cerviceId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/cervice/${cerviceId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addCerviceWithImage: async (cerviceData) => {
    try {
      const formData = new FormData();
      formData.append('avatarFile', cerviceData.avatarFile);
      formData.append('name', cerviceData.name);
      formData.append('description', cerviceData.description);

      const response = await axios.post(`${API_BASE_URL}/cervice/add-cervice-with-image`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateCervice: async (updatedCervice) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/cervice`, updatedCervice);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteCervice: async (cerviceId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/cervice/${cerviceId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default CerviceService;
