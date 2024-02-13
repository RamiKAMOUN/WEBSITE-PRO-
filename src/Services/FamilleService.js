import axios from 'axios';

const API_BASE_URL = 'https://localhost:7294/api'; 

const FamilleService = {
  getAllFamilles: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/famille`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getFamilleById: async (familleId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/famille/${familleId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addFamilleWithImage: async (familleData) => {
    try {
      const formData = new FormData();
      formData.append('AvatarFile', familleData.AvatarFile);

      const response = await axios.post(`${API_BASE_URL}/famille/add-famille-with-image`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateFamille: async (updatedFamille) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/famille`, updatedFamille);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteFamille: async (familleId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/famille/${familleId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default FamilleService;
