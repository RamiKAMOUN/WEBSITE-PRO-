import axios from 'axios';

const API_BASE_URL = 'https://localhost:7294/api';

const DirigeantService = {
  getAllDirigeants: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/dirigeant`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getDirigeantById: async (dirigeantId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/dirigeant/${dirigeantId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addDirigeantWithImage: async (dirigeantData) => {
    try {
      const formData = new FormData();
      formData.append('AvatarFile', dirigeantData.AvatarFile);
      formData.append('Name', dirigeantData.Name);
      formData.append('Description', dirigeantData.Description);

      const response = await axios.post(`${API_BASE_URL}/dirigeant/add-dirigeant-with-image`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateDirigeant: async (updatedDirigeant) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/dirigeant`, updatedDirigeant);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteDirigeant: async (dirigeantId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/dirigeant/${dirigeantId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default DirigeantService;
