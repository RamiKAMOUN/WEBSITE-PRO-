import axios from 'axios';

const API_BASE_URL = 'https://localhost:7294/api'; 

const NosTechnolgService = {
  getAllNosTechs: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/nostechnolg`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getNosTechById: async (nosTechId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/nostechnolg/${nosTechId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addNosTechWithImage: async (nosTechData) => {
    try {
      const formData = new FormData();
      formData.append('avatarFile', nosTechData.avatarFile);

      const response = await axios.post(`${API_BASE_URL}/nostechnolg/add-Technologie-with-image`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateNosTech: async (updatedNosTech) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/nostechnolg`, updatedNosTech);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteNosTech: async (nosTechId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/nostechnolg/${nosTechId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default NosTechnolgService;
